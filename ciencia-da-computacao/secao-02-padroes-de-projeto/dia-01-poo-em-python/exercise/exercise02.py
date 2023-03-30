import statistics


class Calculate:
    @staticmethod
    def average(*values: int or float):
        return statistics.mean(values)

    @staticmethod
    def median(*values: int or float):
        return statistics.median(values)

    @staticmethod
    def mode(*values: int or float):
        return statistics.mode(values)


print(Calculate.average(6, 6))
