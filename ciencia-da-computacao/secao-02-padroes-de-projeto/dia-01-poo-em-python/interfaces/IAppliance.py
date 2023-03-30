from abc import ABC, abstractmethod


class IAppliance(ABC):
    @abstractmethod
    def turn_on(self) -> None:
        raise SyntaxError("turn_on not implented")

    @abstractmethod
    def turn_off(self) -> None:
        raise SyntaxError("turn_off not implented")

    @abstractmethod
    def status(self):
        raise SyntaxError("status not implented")
