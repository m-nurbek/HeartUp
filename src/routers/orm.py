from pathlib import Path
from typing import Optional
from uuid import UUID
from fastapi import APIRouter, Depends, HTTPException, UploadFile, File, Form
from sqlalchemy.orm import Session
from http import HTTPStatus

from src.orm import schemas, crud
from src.settings import SessionLocal, BASE_DIR

router = APIRouter()


# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.post("/api/user", response_model=schemas.User, tags=['ORM'])
async def create_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    if crud.user.get_by_email(db, user.email):
        raise HTTPException(status_code=HTTPStatus.BAD_REQUEST, detail="Email already registered")
    try:
        new_user = crud.user.create_instance(db=db, user=user)
    except Exception as err:
        raise HTTPException(status_code=HTTPStatus.BAD_REQUEST, detail=str(err))

    return new_user


@router.get("/api/user", response_model=schemas.User, tags=['ORM'])
async def read_user(user_id: str, db: Session = Depends(get_db)):
    user = crud.user.get_by_id(db=db, id=user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user


@router.post("/api/doctor", response_model=schemas.Doctor, tags=['ORM'])
async def create_doctor(doctor: schemas.DoctorCreate = Form(), db: Session = Depends(get_db)):
    if crud.doctor.get_by_email(db, doctor.email):
        raise HTTPException(status_code=HTTPStatus.BAD_REQUEST, detail="Email already registered")
    try:
        new_doctor = crud.doctor.create_instance(db=db, doctor=doctor)
    except Exception as err:
        raise HTTPException(status_code=HTTPStatus.BAD_REQUEST, detail=str(err))

    return new_doctor


@router.put("/api/doctor/{doctor_id}", response_model=schemas.Doctor, tags=['ORM'])
async def update_doctor_info(doctor_id: str, photo: Optional[UploadFile] = File(None), db: Session = Depends(get_db)):
    doctor = crud.doctor.get_by_id(db=db, id=doctor_id)
    if not doctor:
        raise HTTPException(status_code=HTTPStatus.NOT_FOUND, detail="No such user/doctor")

    photo_path = Path(BASE_DIR / f"src/photos/{photo.filename}").as_posix()
    with open(photo_path, 'wb') as f:
        f.write(await photo.read())

    doctor.photo = photo_path
    db.add(doctor)
    db.commit()
    db.refresh(doctor)
    return doctor


@router.get("/api/doctor", response_model=schemas.Doctor, tags=['ORM'])
async def read_doctor(doctor_id: str, db: Session = Depends(get_db)):
    doctor = crud.doctor.get_by_id(db=db, id=doctor_id)
    if not doctor:
        raise HTTPException(status_code=404, detail="Doctor not found")
    return doctor
