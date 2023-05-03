# Em um software monitor, o qual verifica a resiliência de outro software,
# precisamos saber o tempo máximo que um software permaneceu
# sem instabilidades.
# Para isto, a cada hora é feito uma requisição ao sistema para verificamos se
# está tudo bem. Supondo um array que contenha os estados coletados por nosso
# software, calcule quanto tempo máximo que o servidor permaneceu
# sem instabilidades.

# 1 - OK
# 0 - Instabilidades

# valores_coletados = [0, 1, 1, 1, 0, 0, 1, 1]
# resultado = 3

# valores_coletados = [1, 1, 1, 1, 0, 0, 1, 1]
# resultado = 4

valores_coletados = [1, 1, 1, 1, 0, 0, 1, 1]


def check_stability(array):
    """Checa o tempo máximo que um software permaneceu sem instabilidades"""
    previous_count = 0
    count = 0
    for status in array:
        if status == 1:
            count += 1
        elif count > previous_count:
            previous_count = count
        else:
            count = 0
    return previous_count


print(check_stability(valores_coletados))
