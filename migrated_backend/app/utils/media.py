def media_url(path: str | None) -> str | None:

    if not path:
        return None

    path = path.replace("\\", "/")

    if path.startswith("/uploads/"):
        return path

    return f"/uploads/{path}"
