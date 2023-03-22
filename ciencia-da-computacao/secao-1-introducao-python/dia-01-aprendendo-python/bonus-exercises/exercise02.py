def print_triagle_on_screen(number: int):
    """Dado um valor n qualquer, tal que n > 1, imprima na tela um triângulo
    retângulo com n asteriscos de base. Por exemplo, para n = 5 o triângulo
    terá 5 asteriscos na base"""
    for index in range(number):
        print(index * "* ")


print_triagle_on_screen(10)
