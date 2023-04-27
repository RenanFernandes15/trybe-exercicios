NUMBERS = [1, 2, 3, 4, 5, 6, 7, 12, 20]  # 5 pares


def counts_even(n):
    """Algoritmo não recursivo para contar quantos números pares existem em
    uma sequência numérica (1 a n)"""
    count = 0
    for num in n:
        if num % 2 == 0:
            count += 1
    return count


print(counts_even(NUMBERS))
