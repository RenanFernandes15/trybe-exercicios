from abc import ABC


class GeometricFigure(ABC):
    def __init__(self, area: float, perimeter: float) -> None:
        self.area = area
        self.perimeter = perimeter


class Square(GeometricFigure):
    def __init__(self, area: float, perimeter: float, side: int) -> None:
        super().__init__(area, perimeter)
        self.side = side

    def __str__(self) -> str:
        return f"""Square:
            area - {self.area}
            perimeter - {self.perimeter}
            side - {self.side}
            """


class Rectangle(GeometricFigure):
    def __init__(
        self, area: float, perimeter: float, base: float, height: float
    ) -> None:
        super().__init__(area, perimeter)
        self.base = base
        self.height = height

    def __str__(self) -> str:
        return f"""Rectangle:
            area - {self.area}
            perimeter - {self.perimeter}
            base - {self.base}
            height - {self.height}
            """


class Circle(GeometricFigure):
    def __init__(self, area: float, perimeter: float, ray: float) -> None:
        super().__init__(area, perimeter)
        self.ray = ray

    def __str__(self) -> str:
        return f"""Circle:
            area - {self.area}
            perimeter - {self.perimeter}
            ray - {self.ray}
            """


square = Square(perimeter=7.5, area=10, side=4)
rectangle = Rectangle(perimeter=5, area=15, base=10, height=5)
circle = Circle(perimeter=6, area=8, ray=9)


print(square)
print(rectangle)
print(circle)
