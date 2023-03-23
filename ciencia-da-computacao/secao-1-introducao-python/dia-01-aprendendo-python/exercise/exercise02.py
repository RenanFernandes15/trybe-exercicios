import statistics

numbers = [4, 2, 3, 1]


def calculate_arithmetic_mean(list):
    """Calcula a média aritmética dos valores contidos em uma lista"""
    # return sum(list) / len(list)
    return statistics.fmean(numbers)


print(calculate_arithmetic_mean(numbers))
