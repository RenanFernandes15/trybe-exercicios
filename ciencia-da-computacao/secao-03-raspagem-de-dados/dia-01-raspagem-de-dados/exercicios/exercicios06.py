from pymongo import MongoClient

client = MongoClient("mongodb://localhost:8081/books_db")
db = client.library


def list_books(category: str):
    books = db.books.find({"categories": category}, {"_id": 0, "title": 1})
    return list(books)


print(list_books("Software Engineering"))
