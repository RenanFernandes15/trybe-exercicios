names = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]


def biggest_name(list):
    """Recebe uma lista de nomes e retorne o
    nome com a maior quantidade de caracteres"""
    return max(list, key=len)


print(biggest_name(names))
