def print_frame(number):
    """Dado um valor n qualquer, tal que n > 1,
    imprima na tela um quadrado feito de asteriscos de lado de tamanho n"""
    if number > 1:
        for index in range(number):
            # print(" ".join(["*" for index in range(number)]))
            print(number * "* ")


print_frame(8)
