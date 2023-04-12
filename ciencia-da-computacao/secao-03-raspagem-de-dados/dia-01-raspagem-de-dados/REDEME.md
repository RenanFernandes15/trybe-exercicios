# Configurações

## Subir o Docker Compose do banco de dados

      docker-compose up -d

> Para remover o Compose use o comando
>
>     docker-compose down

## Conexão com o banco de dados

      mongodb://localhost:8081/books_db

## Popular o banco de dados

1. Abrir o terminal interativo do container

        docker exec -it books_db bash

2. Importar os dados para o banco

        mongoimport --db library --jsonArray --file ./data/books.json
