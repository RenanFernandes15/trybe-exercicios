numbers = [4, 2]


def calculate_arithmetic_mean(list):
    """Calcula a média aritmética dos valores contidos em uma lista"""
    sum = 0
    for value in list:
        sum += value

    return sum / len(list)


print(calculate_arithmetic_mean(numbers))
