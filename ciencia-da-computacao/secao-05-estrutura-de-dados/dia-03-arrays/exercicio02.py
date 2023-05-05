# Em um jogo de baralho, as cartas estão representadas por um array numérico.
# Para iniciar o jogo, devemos embaralhar as cartas.
# Faremos isto dividindo uma porção de cartas em 2 e depois mesclando as
# duas porções. Por exemplo:

# Exemplo 1:
# cartas = [2, 6, 4, 5]
# cartas por parte = 2

# resultado = [2, 4, 6, 5]

# Exemplo 2:
# cartas = [1, 4, 4, 7, 6, 6]
# cartas por parte = 3

# resultado = [1, 7, 4, 6, 4, 6]


cards = [1, 4, 4, 7, 6, 6]


def match(cards: list, start: int, mid: int, end: int):
    left_mid_index, right_mid_index = (start + mid) // 2, (mid + end) // 2
    left, right = cards[left_mid_index], cards[right_mid_index]
    cards[left_mid_index] = right
    cards[right_mid_index] = left
    print(left, right)
    print(cards)


def shuffle(cards, start=0, end=None):
    if not end:
        end = len(cards) - 1

    if (end - start) > 2:
        mid = (start + end) // 2
        shuffle(cards, start, mid)
        shuffle(cards, mid, end)
        match(cards, start, mid, end)


shuffle(cards)
print(cards)
