def summation(number: int):
    """receba um número inteiro N e retorne o somatório de todos os
    números de 1 até N. Por exemplo, para N = 5, o valor esperado será 15"""
    return sum([ind for ind in range(number + 1)])


print(summation(5))
