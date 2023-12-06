from pydantic import BaseModel
from enum import Enum
from typing import Optional


class UserBase(BaseModel):
    email: str
    name: str
    surname: str
    phone_number: str


class UserCreate(UserBase):
    password: str


class User(UserBase):
    class Config:
        orm_mode = True


class Specialization(str, Enum):
    neurologist = 'neurologist'
    pediatrician = 'pediatrician'
    cardiologist = 'cardiologist'
    general_practitioner = 'general_practitioner'
    radiologist = 'radiologist'
    surgeon = 'surgeon'
    oncologist = 'oncologist'
    not_available = 'not_available'


class DoctorBase(UserBase):
    profile_description: str
    specialization: str



class DoctorCreate(DoctorBase, UserCreate):
    pass


class Doctor(DoctorBase):
    photo: Optional[str]


    class Config:
        orm_mode = True


class Sex(str, Enum):
    male = 'male'
    female = 'female'


class PatientBase(UserBase):
    sex: Sex
    complaints: str


class PatientCreate(PatientBase, UserCreate):
    pass


class Patient(PatientBase):
    _user: User

    class Config:
        orm_mode: True
