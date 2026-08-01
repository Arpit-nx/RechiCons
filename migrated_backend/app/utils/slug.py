from slugify import slugify

def generate_slug(title: str):
    return slugify(title)