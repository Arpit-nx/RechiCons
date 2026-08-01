from enum import Enum


class ImageType(str, Enum):
    THUMBNAIL = "thumbnail"
    GALLERY = "gallery"
    FLOORPLAN = "floorplan"
    SITEPLAN = "siteplan"