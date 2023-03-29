from products.Blender import Blender
from products.Fan import Fan


class Person:
    def __init__(self, name: str, account_balance: float) -> None:
        self.name = name
        self.account_balance = account_balance
        self.products = dict()

    def buy_product(self, product: (Blender or Fan)):
        if product.price <= self.account_balance:
            self.account_balance -= product.price
            self.products[product.__class__.__name__.lower()] = product

    def get_products(self):
        return list(self.products.keys())


black_fan = Fan(color="Black", power=600, price=250.00, voltage=110)
red_blender = Blender(color="Red", power=1200, price=500.99, voltage=110)

cook_person = Person("Zé Broa", 10000.00)

cook_person.buy_product(red_blender)
cook_person.buy_product(black_fan)
print(cook_person.get_products())
