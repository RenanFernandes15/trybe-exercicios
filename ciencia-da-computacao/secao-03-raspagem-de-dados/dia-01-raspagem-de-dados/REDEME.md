# Ciência da computação, raspagem de dados dia 01

## Configurações

### Ambiente virtual

O Python oferece um recurso chamado de ambiente virtual, onde permite sua máquina rodar sem conflitos, diferentes tipos de projetos com diferentes versões de bibliotecas.

1. **criar o ambiente virtual**

        python3 -m venv .venv

2. **ativar o ambiente virtual**

        source .venv/bin/activate

3. **instalar as dependências no ambiente virtual**

        python3 -m pip install -r requirements.txt

> Com o seu ambiente virtual ativo, as dependências serão instaladas neste ambiente. Quando precisar desativar o ambiente virtual, execute o comando `deactivate`. Lembre-se de ativar novamente quando voltar a trabalhar no projeto.

### Subir o Docker Compose do banco de dados

      docker-compose up -d

> Para remover o Compose use o comando
>
>     docker-compose down

### Conexão com o banco de dados

      mongodb://localhost:8081/books_db

### Popular o banco de dados

1. Abrir o terminal interativo do container

        docker exec -it books_db bash

2. Importar os dados para o banco

        mongoimport --db library --jsonArray --file ./data/books.json
