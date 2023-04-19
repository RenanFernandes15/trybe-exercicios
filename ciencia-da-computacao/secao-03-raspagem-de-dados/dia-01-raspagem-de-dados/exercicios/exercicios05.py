import requests
from parsel import Selector

URL = "http://books.toscrape.com/catalogue/the-grand-design_405/index.html"
with requests.get(URL) as response:
    selector = Selector(text=response.text)
    title = selector.css("div.product_main > h1::text").get()
    price = selector.css("div.product_main > p.price_color").re_first(
        "[0-9]+.?[0-9]+"
    )
    stock = selector.css("div.product_main > p.instock").re_first("[0-9]+")
    description = (
        selector.css("article.product_page > p::text")
        .get()
        .removesuffix("...more")
    )
    image_url = selector.css("img[alt='The Grand Design']").attrib["src"]
    print(title, price, description, image_url, stock, sep=", ")
