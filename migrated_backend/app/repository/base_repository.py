from abc import ABC
from datetime import datetime

from app.repository.workbook import WorkbookManager
from app.repository.schema import SCHEMA

class BaseRepository(ABC):

    SHEET_NAME = ""
    MODEL = None
    RESPONSE_MODEL = None
    CREATE_MODEL = None

    def __init__(self):

        if not self.SHEET_NAME:
            raise ValueError(
                "SHEET_NAME must be defined."
            )

        self.manager = WorkbookManager()

        self.sheet = self.manager.sheet(
            self.SHEET_NAME
        )

        self.columns = SCHEMA[
            self.SHEET_NAME
        ]

    #Helper for find_by function...
    def _get_value(
        self,
        row,
        column: str,
    ):

        if hasattr(row, column):

            return getattr(row, column)

        if isinstance(row, dict):

            return row.get(column)

        return None

    def find_all(self):

        return self.map_records(
            self.manager.read_all(
                self.SHEET_NAME
            )
        )

    def find_by_id(
        self,
        record_id: int,
    ):

        records = self.find_all()

        for row in records:

            if self._get_value(row, "id") == record_id:
                return row
            
        return None

    def find_by(
        self,
        column: str,
        value,
    ):

        rows = self.find_all()

        return [
            row
            for row in rows
            if self._get_value(row, column) == value
        ]

    def find_first(
        self,
        column: str,
        value,
    ):

        rows = self.find_all()

        for row in rows:

            if self._get_value(row, column) == value:
                return row

        return None

    def insert(
        self,
        data: dict,
    ):
        data = self.normalize(data)

        sheet = self.manager.sheet(
            self.SHEET_NAME
        )

        record = {}

        record["id"] = self.manager.next_id(
            self.SHEET_NAME
        )

        for column in self.columns:

            if column == "id":
                continue

            record[column] = data.get(column)

        if "created_at" in self.columns:

            record["created_at"] = datetime.now()

        if "updated_at" in self.columns:

            record["updated_at"] = datetime.now()

        row = [

            record.get(column)

            for column in self.columns

        ]

        print("========== INSERT ==========")
        print(data)

        print("Sheet:", self.SHEET_NAME)

        print("Columns:", self.columns)

        sheet.append(row)

        print("Appending Row:")
        print(row)

        print("Rows after append:", sheet.max_row)
        
        print("Saving workbook...")
        self.manager.save()
        print(self.manager.read_all(self.SHEET_NAME))
        print("Workbook Saved.")
        return self.map_record(record)

    def update(
        self,
        record_id: int,
        data: dict,
    ):
        data = self.normalize(data)
        sheet = self.manager.sheet(
            self.SHEET_NAME
        )

        headers = self.columns

        for row in sheet.iter_rows(
            min_row=2
        ):

            if row[0].value == record_id:

                values = {

                    headers[i]: row[i].value

                    for i in range(
                        len(headers)
                    )

                }

                values.update(data)

                if "updated_at" in headers:

                    values["updated_at"] = datetime.now()

                for i, column in enumerate(headers):

                    row[i].value = values.get(column)

                self.manager.save()

                return self.map_record(values)

        return None

    def delete(
        self,
        record_id: int,
    ):

        sheet = self.manager.sheet(
            self.SHEET_NAME
        )

        for index, row in enumerate(

            sheet.iter_rows(
                min_row=2
            ),

            start=2,

        ):

            if row[0].value == record_id:

                sheet.delete_rows(
                    index
                )

                self.manager.save()

                return True

        return False

    def count(self):

        return len(
            self.find_all()
        )

    def exists(
        self,
        column: str,
        value,
    ):

        return (

            self.find_first(

                column,

                value,

            )

            is not None

        )

    def map_record(
        self,
        record: dict | None,
    ):

        if record is None:
            return None

        if self.RESPONSE_MODEL is None:
            return record

        return self.RESPONSE_MODEL.model_validate(
            record
        )

    def map_records(
        self,
        records: list,
    ):

        return [

            self.map_record(record)

            for record in records

        ]

    #Normalization function for variable payloads.
    def normalize(
        self,
        payload,
    ):

        if hasattr(payload, "model_dump"):
            return payload.model_dump()

        return payload

    def as_dict(self, record):

        if hasattr(record, "model_dump"):
            return record.model_dump()

        return record