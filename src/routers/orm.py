from uuid import UUID
from fastapi import APIRouter, Depends, HTTPException, UploadFile, File
from phonenumbers import PhoneNumberFormat
from sqlmodel import Session

from src.orm import schemas, crud
from src.settings import engine


router = APIRouter()


# Dependency
def get_db():
    db = Session(engine)
    try:
        yield db
    finally:
        db.close()


@router.post("/api/users", response_model=schemas.UserRead, tags=['User'])
def create_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    try:
        if crud.get_user_by_email(db, user.email):
            raise HTTPException(status_code=400, detail="Email already registered")
        new_user = crud.create_user(db=db, user=user)
        return new_user
    except Exception as e:
        raise HTTPException(status_code=500, detail=e)


@router.get("/api/users", response_model=schemas.UserRead, tags=['User'])
def read_user(user_id, db: Session = Depends(get_db)):
    try:
        user = crud.get_user(db=db, user_id=user_id)
        if not user:
            raise HTTPException(status_code=404, detail="User not found")
        return user
    except Exception as e:
        raise HTTPException(status_code=500, detail=e)

