from io import BytesIO
from uuid import UUID
from fastapi import APIRouter, Depends, HTTPException, UploadFile, File
from phonenumbers import PhoneNumberFormat
from sqlalchemy.orm import Session
from PIL import Image

from src.orm import schemas, crud
from src.settings import SessionLocal, engine

router = APIRouter()


# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.post("/api/users", response_model=schemas.User, tags=['ORM', 'user'])
async def create_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    if crud.get_user_by_email(db, user.email):
        raise HTTPException(status_code=400, detail="Email already registered")
    new_user = crud.create_user(db=db, user=user)
    new_user.phone_number = schemas.format_number(user.phone_number, PhoneNumberFormat.E164)
    return new_user


@router.get("/api/users", response_model=schemas.User, tags=['ORM', 'user'])
async def read_user(user_id: UUID, db: Session = Depends(get_db)):
    user = crud.get_user(db=db, user_id=user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    user.phone_number = schemas.format_number(user.phone_number, PhoneNumberFormat.E164)
    return user


@router.post("/api/patient", response_model=schemas.Patient, tags=['ORM', 'patient'])
async def create_patient(patient: schemas.PatientCreate, db: Session = Depends(get_db)):
    if crud.get_patient_by_email(db, patient.email):
        raise HTTPException(status_code=400, detail="Email already registered")
    new_patient = crud.create_patient(db=db, user=patient)
    new_patient.phone_number = schemas.format_number(new_patient.phone_number, PhoneNumberFormat.E164)
    return new_patient


@router.get("/api/patient", response_model=schemas.User, tags=['ORM', 'patient'])
async def read_user(user_id: UUID, db: Session = Depends(get_db)):
    patient = crud.get_user(db=db, user_id=user_id)
    if not patient:
        raise HTTPException(status_code=404, detail="User not found")
    patient.phone_number = schemas.format_number(patient.phone_number, PhoneNumberFormat.E164)
    return patient


@router.post("/api/doctor", response_model=schemas.Patient, tags=['ORM', 'doctor'])
async def create_doctor(doctor: schemas.DoctorCreate, photo: UploadFile = File(...), db: Session = Depends(get_db)):
    if crud.get_doctor_by_email(db, doctor.email):
        raise HTTPException(status_code=400, detail="Email already registered")
    img = BytesIO(await photo.read())
    new_doctor = crud.create_doctor(db=db, user=doctor, photo=img)
    new_doctor.phone_number = schemas.format_number(new_doctor.phone_number, PhoneNumberFormat.E164)
    return new_doctor


@router.get("/api/doctor", response_model=schemas.User, tags=['ORM', 'doctor'])
async def read_doctor(user_id: UUID, db: Session = Depends(get_db)):
    doctor = crud.get_user(db=db, user_id=user_id)
    if not doctor:
        raise HTTPException(status_code=404, detail="User not found")
    doctor.phone_number = schemas.format_number(doctor.phone_number, PhoneNumberFormat.E164)
    return doctor
