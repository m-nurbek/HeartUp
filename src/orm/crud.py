from typing import Generic, TypeVar, Type, Optional, List

from fastapi.encoders import jsonable_encoder
from sqlalchemy.orm import Session

from . import models, schemas


ModelType = TypeVar("ModelType", bound=models.Base)
CreateSchemaType = TypeVar("CreateSchemaType", bound=schemas.BaseModel)
UpdateSchemaType = TypeVar("UpdateSchemaType", bound=schemas.BaseModel)


class CRUDBase(Generic[ModelType, CreateSchemaType]):
    def __init__(self, model: Type[ModelType]):
        """
        CRUD object with default methods to Create, Read, Update, Delete (CRUD).
        **Parameters**
        * `model`: A SQLAlchemy model class
        * `schema`: A Pydantic model (schema) class
        """
        self.model = model

    def get_by_id(self, db: Session, id: str) -> Optional[ModelType]:
        return db.query(self.model).filter(self.model.id == id).first()

    def get_instances(self, db: Session, skip: int = 0, limit: int = 100) -> List[ModelType]:
        return db.query(self.model).offset(skip).limit(limit).all()

    def get_by_email(self, db: Session, email: str) -> Optional[ModelType]:
        return db.query(self.model).filter(self.model.email == email).first()

    def create_instance(self, db: Session, *, obj: CreateSchemaType) -> ModelType:
        obj_in_data = jsonable_encoder(obj)
        db_obj = self.model(**obj_in_data)
        db.add(db_obj)
        db.commit()
        db.refresh(db_obj)
        return db_obj


class CRUDUser(CRUDBase[models.User, schemas.UserCreate]):
    def create_instance(self, db: Session, *, user: schemas.UserCreate) -> ModelType:
        return super().create_instance(db, obj=user)


user = CRUDUser(models.User)


class CRUDDoctor(CRUDBase[models.Doctor, schemas.DoctorCreate]):
    def create_instance(self, db: Session, *, doctor: schemas.DoctorCreate) -> ModelType:
        return super().create_instance(db, obj=doctor)


doctor = CRUDDoctor(models.Doctor)


class CRUDPatient(CRUDBase[models.Patient, schemas.PatientCreate]):
    def create_instance(self, db: Session, *, patient: schemas.UserCreate) -> ModelType:
        return super().create_instance(db, obj=patient)


patient = CRUDPatient(models.Patient)
