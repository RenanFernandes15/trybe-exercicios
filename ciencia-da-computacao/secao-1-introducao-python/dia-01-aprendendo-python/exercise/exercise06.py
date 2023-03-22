def tryangle_type(a, b, c):
    """Recebe os três lado de um triângulo e informe qual o tipo de triângulo
    formado ou "não é triangulo", caso não seja possível formar um triângulo"""
    if ((a + b) > c or (a + c) > b or (b + c) > a) and (a and b and c):
        if a == b == c:
            print("Triângulo Equilátero")
        elif a == b or b == c or c == a:
            print("Triângulo Isósceles")
        elif a != b != c:
            print("Triângulo Escaleno")
    else:
        print("não é triangulo")


tryangle_type(4, 4, 4)
