from functools import lru_cache
from pydantic import Field, computed_field
from pydantic_settings import BaseSettings, SettingsConfigDict
from urllib.parse import quote_plus

class Settings(BaseSettings):
    """
    Global application settings.

    Loads configuration from .env automatically.
    """

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        case_sensitive=False,
        extra="ignore",
    )

    # ==========================================================
    # Application
    # ==========================================================

    app_name: str = Field(default="Rechi Construction API")
    app_version: str = Field(default="1.0.0")
    environment: str = Field(default="development")
    debug: bool = Field(default=True)

    # ==========================================================
    # Database
    # ==========================================================

    db_server: str
    db_name: str
    db_driver: str = "ODBC Driver 17 for SQL Server"

    db_trusted_connection: str = "yes"
    db_trust_server_certificate: str = "yes"


    @computed_field
    @property
    def database_url(self) -> str:

        params = quote_plus(
            (
                f"DRIVER={{{self.db_driver}}};"
                f"SERVER={self.db_server};"
                f"DATABASE={self.db_name};"
                f"Trusted_Connection={self.db_trusted_connection};"
                f"TrustServerCertificate={self.db_trust_server_certificate};"
            )
        )

        return f"mssql+pyodbc:///?odbc_connect={params}"
    # ==========================================================
    # JWT
    # ==========================================================

    secret_key: str

    algorithm: str = "HS256"

    access_token_expire_minutes: int = 60

    refresh_token_expire_days: int = 7

    # ==========================================================
    # Uploads
    # ==========================================================

    upload_dir: str = "uploads"

    max_upload_size: int = 10 * 1024 * 1024

    # ==========================================================
    # Email
    # ==========================================================

    # smtp_host: str | None = None
    # smtp_port: int = 587
    # smtp_username: str | None = None
    # smtp_password: str | None = None
    # smtp_from: str | None = None

    # ==========================================================
    # CORS
    # ==========================================================

    allowed_origins: list[str] = [
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ]


@lru_cache
def get_settings() -> Settings:
    """
    Cached settings instance.
    """
    return Settings()


settings = get_settings()