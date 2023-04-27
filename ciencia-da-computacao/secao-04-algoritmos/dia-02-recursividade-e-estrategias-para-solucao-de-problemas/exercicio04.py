# 16 = {1, 2, 4, 8, 16}
# 32 = {1, 2, 4, 8, 16, 32}

# 14 = {1, 2, 7, 14}
# 15 = {1, 3, 5, 15}

# 12 = {1, 2, 3, 4, 6, 12}
# 32 = {1, 2, 4, 8, 16, 32}


# def mdc(a, b):
#     """"""
#     dividers = list()
#     for n in range(1, a):
#         if a % n == 0 and b % n == 0:
#             dividers.append(n)
#     return dividers[-1]


def mdc(a, b):
    """Algoritmo recursivo para encontrar o máximo divisor comum (mdc) de dois
    inteiros"""
    if b == 0:
        return a
    return mdc(b, a % b)


print(mdc(16, 32))
