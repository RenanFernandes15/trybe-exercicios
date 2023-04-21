NUMBERS = [1, 2, 3, 4, 5, 6, 7, 12, 20]  # 5 pares


def counts_even(n: list):
    """Algoritmo não recursivo para contar quantos números pares existem em
    uma sequência numérica (1 a n)"""
    if len(n) > 0:
        return counts_even(n[1:]) + (1 if n[0] % 2 == 0 else 0)
    return 0


print(counts_even(NUMBERS))
