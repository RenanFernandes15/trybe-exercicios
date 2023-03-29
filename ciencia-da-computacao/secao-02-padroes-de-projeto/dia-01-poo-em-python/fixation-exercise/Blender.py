class Blender:
    def __init__(self, price: float, color: str, power: int, voltage: int):
        self.price = price
        self.color = color
        self._power = power
        self._voltage = voltage
        self.__on = False
        self.__speed = 0
        self.__max_speed = 3
        self.__current_current_in_the_motor = 0

    def turn_on(self, speed: int):
        if 0 >= speed > self.__max_speed:
            raise ValueError(f"Speed must be between 0 and {self.__max_speed}")

        self.__speed = speed
        self.__current_current_in_the_motor = (
            (self._power / self._voltage) / self.__speed
        ) * speed
        self.__on = True

    def turn_off(self):
        self.__on = False
        self.__speed = 0
        self.__current_current_in_the_motor = 0

    def status(self):
        return self.__on
