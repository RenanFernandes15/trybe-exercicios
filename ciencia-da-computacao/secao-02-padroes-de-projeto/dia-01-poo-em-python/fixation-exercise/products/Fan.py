from dataclasses import dataclass


@dataclass
class Fan:
    price: float
    color: str
    power: int
    voltage: int
    __on = False
    __speed = 0
    __max_speed = 4
    __current_current_in_the_motor = 0

    def turn_on(self, speed: int):
        if 0 >= speed > self.__max_speed:
            raise ValueError(f"Speed must be between 0 and {self.__max_speed}")

        self.__speed = speed
        self.__current_current_in_the_motor = (
            (self.power / self.voltage) / self.__speed
        ) * speed
        self.__on = True

    def turn_off(self):
        self.__on = False
        self.__speed = 0
        self.__current_current_in_the_motor = 0

    def status(self):
        return self.__on


if __name__ == "__main__":
    black_fan = Fan(color="Black", power=600, price=250.00, voltage=110)
    black_fan.turn_on(3)

    print(black_fan.__class__.__name__.lower())

    # print(black_fan.status())

    # black_fan.turn_off()

    # print(black_fan.status())
