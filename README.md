# Teste Técnico Onfly - Testes Automatizados

Este projeto contém a automação de testes end-to-end para o e-commerce público [Swag Labs](https://www.saucedemo.com/).

Também foram criados testes para a API pública [Go REST](https://gorest.co.in/).

Ambos como parte de um Teste Técnico para vaga de QA Sênior na empresa **Onfly**.

## Funcionalidades Testadas na Web

- Login com sucesso
- Login com falha (credenciais inválidas)
- Validação de campos obrigatórios (username e password)
- Visualização de produto
- Adição de itens no carrinho
- Remoção de itens no carrinho
- Fluxo completo de compra

## Funcionalidades Testadas na API

- Criação de usuários
- Busca por todos os usuários
- Busca por um usuário especifíco
- Edição de um usuário especifíco
- Exclusão de usuário especifíco

## Casos de Testes 

- Os Casos de Testes estão na pasta [features](./features), no formarto Gherkin e prontos para serem usados com Cucumber.

## Tecnologias Utilizadas

- [Cypress 14+](https://www.cypress.io/)
- [Node.js 22+](https://nodejs.org/en/download)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Postman](https://www.postman.com/)
- [Newman CLI](https://github.com/postmanlabs/newman)

## Instalação e execução

### Clone o repositório:

```bash
git clone git@github.com:paulosandim/teste-tecnico-onfly.git
```

### Criar imagem docker:

```bash
docker build -t cypress-tests .
```

### Executar os testes:

```bash
docker run --rm -v $PWD:/app cypress-tests
```

### Executar os testes com docker-compose:

```bash
docker-compose up --build
```
