from fastapi import UploadFile
from phonenumbers import PhoneNumberFormat, PhoneNumber
from pydantic import BaseModel
from enum import Enum
import phonenumbers


def format_number(phone_number: PhoneNumber | str, format_type: int) -> str:
    if format_type == PhoneNumberFormat.E164:
        return phonenumbers.format_number(phone_number, PhoneNumberFormat.E164)
    elif format_type == PhoneNumberFormat.INTERNATIONAL:
        return phonenumbers.format_number(phone_number, PhoneNumberFormat.INTERNATIONAL)
    elif format_type == PhoneNumberFormat.NATIONAL:
        return phonenumbers.format_number(phone_number, PhoneNumberFormat.NATIONAL)
    return f"Unsupported format type: {format_type}"


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
    neurologist = 'N'
    pediatrician = 'P'
    cardiologist = 'C'
    general_practitioner = 'GN'
    radiologist = 'R'
    surgeon = 'S'
    oncologist = 'O'
    not_available = 'NA'


class DoctorBase(UserBase):
    profile_description: str
    specialization: Specialization


class DoctorCreate(DoctorBase, UserCreate):
    pass


class Doctor(DoctorBase):
    _user: User
    photo: UploadFile

    class Config:
        orm_mode = True


class Sex(str, Enum):
    male = 'M'
    female = 'F'


class PatientBase(UserBase):
    sex: Sex
    complaints: str


class PatientCreate(PatientBase, UserCreate):
    pass


class Patient(PatientBase):
    _user: User

    class Config:
        orm_mode: True
