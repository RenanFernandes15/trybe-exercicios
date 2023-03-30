class TV:
    """
    volume - será inicializado com um valor de 50 e só pode estar entre 0 e 99;
    canal - será inicializado com um valor de 1 e só pode estar entre 1 e 99;
    tamanho - será inicializado com o valor do parâmetro;
    ligada - será inicializado com o valor de False, pois está inicialmente
    desligado."""

    def __init__(self, size: float) -> None:
        self.__volume = 50
        self.__channel = 1
        self.__size = size
        self.__on = False

    def turn_up_volume(self):
        """Aumenta o volume de 1 em 1 até o máximo de 99"""
        if self.__volume <= 99:
            self.__volume += 1

    def turn_down_volume(self):
        """Diminui o volume de 1 em 1 até o mínimo de 0"""
        if self.__volume >= 0:
            self.__volume -= 1

    def change_channel(self, channel: int):
        """Altera o canal de acordo com o parâmetro recebido e deve lançar uma
        exceção (ValueError) caso o valor esteja fora dos limites"""
        if channel < 1 or channel > 99:
            raise ValueError
        self.__channel = channel

    def on_off(self):
        """Alterna o estado da TV entre ligado e desligado (True/False)"""
        if self.__on:
            self.__on = False
        else:
            self.__on = True
