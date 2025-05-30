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

## Instalação

1. Clone o repositório:

```bash
git clone git@github.com:paulosandim/teste-tecnico-onfly.git
```

2. Instale as dependências:

```bash
npm install
```

## Executando os testes

### Abrir o Test Runner interativo:

```bash
npx cypress open
```

### Rodar os testes em modo headless:

```bash
npx cypress run
```

## Estrutura do Projeto

```
cypress/
├── e2e/
│   ├── login.cy.js       # Testes de login
│   └── compra.cy.js      # Testes de visualização e compra
├── fixtures/             # Massa de dados (opcional)
├── support/              # Comandos personalizados e setup
cypress.config.js         # Configuração do Cypress
```

## Credenciais de Teste

Use as seguintes credenciais para simular um login bem-sucedido:

```
Username: standard_user
Password: secret_sauce
```

## Observações

- O site Swag Labs é uma aplicação demo da empresa Sauce Labs para fins de teste.
- Todos os testes são executados com base no ambiente público de demonstração.
