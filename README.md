# Teste Técnico Onfly - Testes Automatizados com Cypress

Este projeto contém a automação de testes end-to-end para o e-commerce [Swag Labs](https://www.saucedemo.com/), como parte de um Teste Técnico para QA Sênior para a empresa **Onfly**, utilizando **Cypress**.

## Funcionalidades Testadas

- Login com sucesso
- Login com falha (credenciais inválidas)
- Validação de campos obrigatórios (username e password)
- Visualização de produto
- Adição e remoção de itens no carrinho
- Fluxo completo de compra

## Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/) 14+
- Node.js 22+
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Instalação

1. Clone o repositório:

```bash
git clone git@github.com:paulosandim/teste-tecnico-onfly.git
```

2. Instale as dependências:

```bash
npm install
```

## Executando os testes com Docker

### Criar imagem:

```bash
docker build -t cypress-tests .
```

### Executar os testes:

```bash
docker run --rm -v $PWD:/app cypress-tests
```

### Também é possível executar os testes com docker-compose:

```bash
docker-compose up --build
```

## Executando os testes de maneira tradicional

### Rodar os teste com Test Runner do Cypress:

```bash
npx cypress open
```

### Rodar os testes em modo headless via linha de comando:

```bash
npx cypress run
```

## Observações

- O site Swag Labs é uma aplicação demo da empresa Sauce Labs para fins de teste.
- Todos os testes são executados com base no ambiente público de demonstração.
