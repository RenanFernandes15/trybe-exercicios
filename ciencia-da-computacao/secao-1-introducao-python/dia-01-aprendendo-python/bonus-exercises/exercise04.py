def amount_to_be_paid(liters, fuel):
    """Recebe o número de litros vendidos, o tipo de combustível (codificado
    da seguinte forma: A - álcool, G - gasolina), e retorna o valor a ser pago
    pelo cliente, sabendo-se que o preço do litro da gasolina é R$ 2,50, e o
    preço do litro do álcool é R$ 1,90"""
    fuels = {"G": (2.25, 0.3, 0.5), "A": (1.90, 0.4, 0.6)}
    if liters < 20:
        return (liters * fuels[fuel][0]) * (1 - fuels[fuel][1])
    else:
        return (liters * fuels[fuel][0]) * (1 - fuels[fuel][2])


print(amount_to_be_paid(10, "G"))
