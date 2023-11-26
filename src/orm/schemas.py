import uuid
from datetime import datetime
from typing import Optional
from sqlmodel import SQLModel


class UserBase(SQLModel):
    email: str
    name: str
    surname: Optional[str]
    phone_number: str


class UserCreate(UserBase):
    password: str


class UserRead(UserBase):
    user_id: uuid.UUID


class DoctorBase(UserBase):
    profile_description: str
    photo: str
    specialization: str


class DoctorCreate(DoctorBase, UserCreate):
    pass


class DoctorRead(DoctorBase):
    doctor_id: uuid.UUID


class PatientBase(UserBase):
    sex: str
    complaints: str


class PatientCreate(PatientBase, UserCreate):
    pass


class PatientRead(PatientBase):
    patient_id: uuid.UUID


class AppointmentBase(SQLModel):
    doctor_id: uuid.UUID
    patient_id: uuid.UUID
    appointment_date: datetime
    appointment_time: datetime
    status: str


class AppointmentCreate(AppointmentBase):
    pass


class AppointmentRead(AppointmentBase):
    appointment_id: uuid.UUID
