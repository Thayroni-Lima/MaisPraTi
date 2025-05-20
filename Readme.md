# Resolução de Exercícios do Curso +PraTI

## 15 exercícios para prática de JS (com Node.js)

## 🐳 Como Rodar o Projeto via Docker

### 1. Pré-requisitos

- Ter o [Docker](https://www.docker.com/) e o Docker Compose instalados.

### 2. Passos para Rodar

```bash
# Clone ou extraia o projeto
git clone https://github.com/Thayroni-Lima/MaisPraTi
cd \MaisPraTi\Lista de Exercícios 01 - JS no BackEnd

# Suba o ambiente
docker compose up --build

# Rode o exercício que quiser (1-15)
docker-compose run --rm node-exercicios node Exercícios/[Número do exercício aqui].js

```

> A primeira execução pode demorar alguns minutos.
