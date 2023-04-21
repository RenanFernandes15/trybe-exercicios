NUMBERS = [1, 2, 30, 4, 5, 6, 7, 12, 20]
# NUMBERS = [-1, -2, -30, -4, -5, -6, -7, -12, -20]


def get_higher(n: list[int]):
    """Algoritmo recursivo que encontre, em uma lista,
    o maior número inteiro."""
    if len(n) > 1:
        m = get_higher(n[1:])
        return n[0] if n[0] > m else m
    return n[0]


print(get_higher(NUMBERS))
