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

## Evidências das execuções dos testes

### Testes do Fluxo de Login:
![evidencias fluxo login](./evidencias/teste-login.gif)

### Testes do Fluxo de Compra:
![evidencias fluxo compra](./evidencias/teste-compra.gif)

### Testes Cypress via Headless:
![evidencias headless](./evidencias/teste-headless.gif)

## Instalação e execução

### Clone o repositório:

```bash
git clone git@github.com:paulosandim/teste-tecnico-onfly.git
```

## Requisitos

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Build e execução completa

### Executar ambos os conjuntos de testes (Newman e Cypress):

```bash
docker-compose up --build
```

### Executar apenas Cypress:
```bash
docker-compose run --build cypress
```

### Executar apenas Newman:
```bash
docker-compose run --rm newman
```

## Integração Contínua com GitHub Actions

Este projeto está integrado ao **GitHub Actions** para rodar testes automaticamente a cada _push_ ou _pull request_.

