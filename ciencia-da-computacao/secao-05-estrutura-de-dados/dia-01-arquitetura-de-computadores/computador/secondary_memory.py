from os import mkdir, listdir
from os.path import join
from shutil import rmtree
import json

DISK_PATH = "./disk"


class SecondaryMemory:
    def __init__(self, disk_path=DISK_PATH) -> None:
        self.disk_path = disk_path
        try:
            mkdir(self.disk_path)
        except FileExistsError:
            pass

    def load(self, value):
        value = str(value)
        next_index = str(len(listdir(self.disk_path)))
        next_file_name = join(self.disk_path, next_index)
        with open(f"{next_file_name}.json", mode="w") as file:
            json.dump(value, file)
            file.close()

    def get(self, index):
        index = str(index)
        file_name = join(self.disk_path, index)
        with open(f"{file_name}.json", mode="r") as file:
            return json.loads(file)

    def clean(self):
        rmtree(self.disk_path)
        mkdir(self.disk_path)
