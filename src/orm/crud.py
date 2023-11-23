from uuid import UUID
from sqlalchemy.orm import Session

from . import models, schemas


def get_user(db: Session, user_id: UUID):
    return db.query(models.User).filter(models.User.id == user_id).first()


def get_user_by_email(db: Session, email: str):
    return db.query(models.User).filter(models.User.email == email).first()


def get_users(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.User).offset(skip).limit(limit).all()


def create_user(db: Session, user: schemas.UserCreate):
    new_user = models.User(email=user.email,
                           name=user.name,
                           surname=user.surname,
                           phone_number=user.phone_number,
                           password=user.password)
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user


# Patient ========================
def get_patient(db: Session, patient_id: UUID):
    return db.query(models.Patient, models.User).filter(models.Patient.id == models.User.id).filter(
        models.Patient.id == patient_id).first()


def get_patient_by_email(db: Session, email: str):
    return db.query(models.Patient, models.User).filter(models.Patient.id == models.User.id).filter(
        models.User.email == email).first()


def get_patients(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Patient, models.User).filter(models.Patient.id == models.User.id).offset(skip).limit(
        limit).all()


def create_patient(db: Session, user: schemas.PatientCreate):
    new_user = models.Patient(email=user.email,
                              name=user.name,
                              surname=user.surname,
                              phone_number=user.phone_number,
                              sex=user.sex,
                              complaints=user.complaints,
                              password=user.password)
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user


# Doctor ========================
def get_doctor(db: Session, doctor_id: UUID):
    return db.query(models.Doctor, models.User).filter(models.Doctor.id == models.User.id).filter(models.Doctor.id == doctor_id).first()


def get_doctor_by_email(db: Session, email: str):
    return db.query(models.Doctor, models.User).filter(models.Doctor.id == models.User.id).filter(models.User.email == email).first()


def get_doctors(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Doctor, models.User).filter(models.Doctor.id == models.User.id).offset(skip).limit(limit).all()


def create_doctor(db: Session, user: schemas.DoctorCreate, photo):
    new_user = models.Doctor(email=user.email,
                             name=user.name,
                             surname=user.surname,
                             phone_number=user.phone_number,
                             profile_description=user.profile_description,
                             specialization=user.specialization,
                             photo=photo,
                             password=user.password)
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user
