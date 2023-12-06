from datetime import datetime
from typing import Optional, List
from sqlalchemy import ForeignKey, LargeBinary, Date, Time
from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column
from sqlalchemy.orm import relationship
from sqlalchemy_utils import PhoneNumberType, EmailType, UUIDType, PasswordType, ChoiceType
import uuid

from src.settings import Base


class User(Base):
    __tablename__ = 'user'
    id = mapped_column(UUIDType(binary=False), primary_key=True, default=uuid.uuid4)
    email = mapped_column('email', EmailType)
    name: Mapped[str] = mapped_column('name')
    surname: Mapped[Optional[str]] = mapped_column('surname')
    phone_number = mapped_column('phone_number', PhoneNumberType())

    password = mapped_column(PasswordType(
        schemes=[
            'pbkdf2_sha512',
            'md5_crypt'
        ],
        deprecated=['md5_crypt'],
    ))

    # Relationships
    _doctor: Mapped["Doctor"] = relationship(back_populates='_user', cascade='all, delete-orphan')
    _patient: Mapped["Patient"] = relationship(back_populates='_user', cascade='all, delete-orphan')

    def __init__(self, email, name, surname, phone_number, password, **kwargs):
        super().__init__(**kwargs)
        self.email = email
        self.name = name
        self.surname = surname
        self.phone_number = phone_number
        self.password = password

    def __repr__(self):
        return f"{self.id}: {self.name} {self.surname} ({self.email})"


class Doctor(User):
    __tablename__ = 'doctor'

    id = mapped_column(UUIDType(binary=False), ForeignKey('user.id'), primary_key=True, default=uuid.uuid4)
    profile_description: Mapped[str] = mapped_column('profile_description')
    photo = mapped_column('photo', LargeBinary)
    specialization: Mapped[str] = mapped_column('specialization')

    _user: Mapped["User"] = relationship(back_populates='_doctor')
    _appointment: Mapped[List["Appointment"]] = relationship(back_populates='_doctor', cascade='all, delete-orphan')

    def __init__(self, email, name, surname, phone_number, profile_description, photo, specialization, password,
                 **kwargs):
        super().__init__(email, name, surname, phone_number, password, **kwargs)
        self.profile_description = profile_description
        self.photo = photo
        self.specialization = specialization


class Patient(User):
    __tablename__ = 'patient'

    id = mapped_column(UUIDType(binary=False), ForeignKey('user.id'), primary_key=True,
                       default=uuid.uuid4)
    sex: Mapped[str] = mapped_column('sex')
    complaints: Mapped[str] = mapped_column('complaints')

    _user: Mapped["User"] = relationship(back_populates='_patient')
    _appointment: Mapped[List["Appointment"]] = relationship(back_populates='_patient',
                                                             cascade='all, delete-orphan')

    def __init__(self, email, name, surname, phone_number, sex, complaints, password, **kwargs):
        super().__init__(email, name, surname, phone_number, password, **kwargs)
        self.sex = sex
        self.complaints = complaints


class Appointment(Base):
    __tablename__ = 'appointment'

    id = mapped_column(UUIDType(binary=False), primary_key=True, default=uuid.uuid4)
    doctor_id = mapped_column(ForeignKey('doctor.id'))
    patient_id = mapped_column(ForeignKey('patient.id'))
    appointment_date = mapped_column('appointment_date', Date, default=datetime.utcnow().date())
    appointment_time = mapped_column('appointment_time', Time, default=datetime.utcnow().time())
    status: Mapped[str] = mapped_column('status')

    _doctor: Mapped["Doctor"] = relationship(back_populates='_appointment')
    _patient: Mapped["Patient"] = relationship(back_populates='_appointment')

    def __init__(self, doctor_id, patient_id, appointment_date, appointment_time, status):
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
