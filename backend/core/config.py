from pydantic_settings import BaseSettings
from functools import lru_cache


class Settings(BaseSettings):
    # App
    APP_NAME: str = "KarigarAI"
    APP_VERSION: str = "1.0.0"
    DEBUG: bool = False

    # Database
    DATABASE_URL: str = "postgresql+asyncpg://postgres:postgres@localhost:5432/karigarai"
    REDIS_URL: str = "redis://localhost:6379"

    # Auth
    SECRET_KEY: str = "your-secret-key-change-in-production"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30

    # Storage
    STORAGE_BUCKET: str = "karigarai-media"
    STORAGE_URL: str = ""

    # AI
    OPENAI_API_KEY: str = ""

    # Sentry
    SENTRY_DSN: str = ""

    class Config:
        env_file = ".env"


@lru_cache()
def get_settings():
    return Settings()
