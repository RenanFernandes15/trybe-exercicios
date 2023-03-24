import sys


def sum_numbers():
    """Recebe vários números naturais através do input e calcule
    a soma desses valores"""
    print(
        "Somar!",
        "Digite os numeros separados por espaço.",
        "Exemplo: 1 5 3 2...",
        sep="\n",
    )
    try:
        numbers = []
        for number in input("Valores: ").split(" "):
            if number.isdigit():
                numbers.append(int(number))
            else:
                raise TypeError(
                    f"Erro ao somar valores, '{number}' é um valor inválido"
                )

        print(sum(numbers))

    except TypeError as error:
        print(f"Erro aconteceu: {error}", file=sys.stderr)


sum_numbers()
