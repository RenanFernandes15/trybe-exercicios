class MainMemory:
    def __init__(self) -> None:
        self.clean()

    def get(self, index: int):
        try:
            return self.loaded_memory[index]
        except IndexError:
            return 0

    def load(self, value):
        self.loaded_memory.append(value)

    def clean(self):
        self.loaded_memory = list()
