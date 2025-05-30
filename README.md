# 🧪 Testes Automatizados com Cypress - E-commerce Swag Labs

Este projeto contém a automação de testes end-to-end para o e-commerce [Swag Labs](https://www.saucedemo.com/) utilizando **Cypress**.

## 📋 Funcionalidades Testadas

- ✅ Login com sucesso
- ❌ Login com falha (credenciais inválidas)
- ⚠️ Validação de campos obrigatórios (username e password)
- 🔍 Visualização de produto
- 🛒 Adição e remoção de itens no carrinho
- 💳 Fluxo completo de compra

## 🛠️ Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/) 12+
- Node.js 16+

## 📦 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/cypress-swag-labs.git
cd cypress-swag-labs
```

2. Instale as dependências:

```bash
npm install
```

## ▶️ Executando os testes

### Abrir o Test Runner interativo:

```bash
npx cypress open
```

### Rodar os testes em modo headless:

```bash
npx cypress run
```

## 📁 Estrutura do Projeto

```
cypress/
├── e2e/
│   ├── login.cy.js       # Testes de login
│   └── compra.cy.js      # Testes de visualização e compra
├── fixtures/             # Massa de dados (opcional)
├── support/              # Comandos personalizados e setup
cypress.config.js         # Configuração do Cypress
```

## 👤 Credenciais de Teste

Use as seguintes credenciais para simular um login bem-sucedido:

```
Username: standard_user
Password: secret_sauce
```

## 📌 Observações

- O site Swag Labs é uma aplicação demo da empresa Sauce Labs para fins de teste.
- Todos os testes são executados com base no ambiente público de demonstração.
