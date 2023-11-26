from pathlib import Path
from sqlmodel import create_engine


# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve(strict=True).parent.parent

SQLALCHEMY_DATABASE_URL = "sqlite:///" + f'{BASE_DIR / "database.db"}'
# SQLALCHEMY_DATABASE_URL = "postgresql://user:password@postgresserver/db"

engine = create_engine(
    SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False}, echo=True
)

