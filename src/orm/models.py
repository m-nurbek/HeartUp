from datetime import datetime
from typing import Optional, List
from sqlalchemy import ForeignKey, Column, Enum
from sqlalchemy.orm import relationship
from sqlalchemy_utils import UUIDType, PasswordType, EmailType
from sqlmodel import SQLModel, Field, Relationship
import uuid
import enum


class User(SQLModel, table=True):
    __tablename__ = 'user'
    user_id: Optional[uuid.UUID] = Field(sa_column=Column(UUIDType(binary=False), primary_key=True, default=uuid.uuid4))
    email: str = Field(sa_column=Column(EmailType))
    name: str = Field(max_length=30)
    surname: Optional[str] = Field(default=None, max_length=30)
    phone_number: str = Field()

    password: str = Field(sa_column=Column(PasswordType(
        schemes=[
            'pbkdf2_sha512',
            'md5_crypt'
        ],
        deprecated=['md5_crypt'],
    )))

    # Relationships
    _doctor: "Doctor" = Relationship(back_populates='_user', sa_relationship_kwargs={'cascade': 'all, delete-orphan'})
    _patient: "Patient" = Relationship(back_populates='_user', sa_relationship_kwargs={'cascade': 'all, delete-orphan'})

    def __init__(self, email, name, surname, phone_number, password, **kwargs):
        super().__init__(**kwargs)
        self.email = email
        self.name = name
        self.surname = surname
        self.phone_number = phone_number
        self.password = password

    def __repr__(self):
        return f"{self.user_id}: {self.name} {self.surname} ({self.email})"


class Doctor(SQLModel, table=True):
    __tablename__ = 'doctor'

    class Specialization(str, enum.Enum):
        neurologist = 'neurologist'
        pediatrician = 'pediatrician'
        cardiologist = 'cardiologist'
        general_practitioner = 'general_practitioner'
        radiologist = 'radiologist'
        surgeon = 'surgeon'
        oncologist = 'oncologist'
        not_available = 'not_available'

    doctor_id: Optional[uuid.UUID] = Field(
        sa_column=Column(UUIDType(binary=False), ForeignKey('user.user_id'), primary_key=True, default=uuid.uuid4))
    profile_description: str = Field()
    photo: str = Field()
    specialization: Specialization = Field(sa_column=Column(Enum(Specialization)))

    _user: "User" = Relationship(back_populates='_doctor')
    _appointment: List["Appointment"] = Relationship(back_populates='_doctor',
                                                     sa_relationship_kwargs={'cascade': 'all, delete-orphan'})

    def __init__(self, email, name, surname, phone_number, profile_description, photo, specialization, password,
                 **kwargs):
        (email, name, surname, phone_number, password)
        self.profile_description = profile_description
        self.photo = photo
        self.specialization = specialization


class Patient(SQLModel, table=True):
    __tablename__ = 'patient'

    class Sex(str, enum.Enum):
        male = 'male'
        female = 'female'

    patient_id: Optional[uuid.UUID] = Field(
        sa_column=Column(UUIDType(binary=False), ForeignKey('user.user_id'), primary_key=True, default=uuid.uuid4))
    sex: str = Field(sa_column=Column(Enum(Sex)))
    complaints: str = Field()

    _user: "User" = Relationship(back_populates='_patient')
    _appointment: List["Appointment"] = Relationship(back_populates='_patient',
                                                     sa_relationship_kwargs={'cascade': 'all, delete-orphan'})

    def __init__(self, email, name, surname, phone_number, sex, complaints, password, **kwargs):
        super().__init__(email, name, surname, phone_number, password, **kwargs)
        self.sex = sex
        self.complaints = complaints


class Appointment(SQLModel, table=True):
    __tablename__ = 'appointment'

    class Status(str, enum.Enum):
        pending = 'pending'
        accepted = 'accepted'
        denied = 'denied'

    appointment_id: Optional[uuid.UUID] = Field(sa_column=Column(UUIDType(binary=False), primary_key=True, default=uuid.uuid4))
    doctor_id: Optional[uuid.UUID] = Field(default=None, sa_column=Column(ForeignKey('doctor.doctor_id')))
    patient_id: Optional[uuid.UUID] = Field(default=None, sa_column=Column(ForeignKey('patient.patient_id')))
    appointment_date: datetime = Field(default=datetime.utcnow().date())
    appointment_time: datetime = Field(default=datetime.utcnow().time())
    status: str = Field(sa_column=Column(Enum(Status)))

    _doctor: "Doctor" = relationship(back_populates='_appointment')
    _patient: "Patient" = relationship(back_populates='_appointment')

    def __init__(self, doctor_id, patient_id, appointment_date, appointment_time, status, **kwargs):
        super().__init__(**kwargs)
        self.doctor_id = doctor_id
        self.patient_id = patient_id
        self.appointment_time = appointment_time
        self.appointment_date = appointment_date
        self.status = status

    def get_doctor_id(self):
        return self.doctor_id

    def set_doctor_id(self, doctor_id):
        self.doctor_id = doctor_id
        return self.doctor_id

    def get_patient_id(self):
        return self.doctor_id

    def set_patient_id(self, patient_id):
        self.patient_id = patient_id
        return self.patient_id

    def get_appointment_date(self):
        return self.appointment_date

    def set_appointment_date(self, appointment_date):
        self.appointment_date = appointment_date
        return self.appointment_date

    def get_appointment_time(self):
        return self.appointment_date

    def set_appointment_time(self, appointment_time):
        self.appointment_time = appointment_time
        return self.appointment_time

    def get_status(self):
        return self.status

    def set_status(self, status):
        self.status = status
        return self.status

    def __repr__(self):
        return f"Status: {self.status} |" + "\n" + f"Doctor: {self.doctor_id}" + "\n" + f"Patient: {self.patient_id}" + \
            "\n" + f"Appointment datetime: {self.appointment_date} {self.appointment_time}"
