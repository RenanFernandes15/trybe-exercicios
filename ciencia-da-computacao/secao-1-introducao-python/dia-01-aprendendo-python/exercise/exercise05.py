import math


def amount_of_paint_cans(metros):
    """Retorna uma tupla contendo a quantidade de latas de tinta a serem
    compradas e o preço total a partir do tamanho de uma parede (em m²)"""
    cans = math.ceil((metros / 3) / 18)
    return (cans, cans * 80.00)


print(amount_of_paint_cans(60))
