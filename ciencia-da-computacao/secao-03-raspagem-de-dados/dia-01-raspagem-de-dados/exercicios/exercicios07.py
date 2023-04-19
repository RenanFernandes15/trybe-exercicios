from pymongo import MongoClient

client = MongoClient("mongodb://localhost:8081/books_db")
db = client.library


def find_sales_by_categories():
    """Faz o cálculo de quantos livros publicados (STATUS = PUBLISH)
    temos em nosso banco de dados por categoria. Os ordena de forma
    decrescente de acordo com a quantidade.
    """
    result = db.books.aggregate(
        [
            {"$match": {"status": "PUBLISH"}},
            {"$unwind": "$categories"},
            {"$group": {"_id": "$categories", "count": {"$sum": 1}}},
            {"$sort": {"count": -1}},
        ]
    )
    return list(result)


print("\n")
print(find_sales_by_categories())
print("\n")
