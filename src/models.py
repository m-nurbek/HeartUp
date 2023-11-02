from enum import Enum
from typing import Optional, List
from uuid import UUID, uuid4

from pydantic import BaseModel


class Gender(str, Enum):
    male = 'male'
    female = 'female'


class Role(str, Enum):
    admin = 'admin'
    doctor = 'doctor'
    patient = 'patient'


class User(BaseModel):
    id: Optional[UUID] = uuid4()
    first_name: str
    last_name: str
    middle_name: Optional[str]
    gender: Gender
    roles: List[Role]


class Prediction(BaseModel):
    name: str
    url: Optional[str] = None
    prediction: str