#language: pt

Funcionalidade: Testes do E-commerce Swag Labs

  Cenário: Validar fluxo de login com sucesso
    Dado que o usuário está na página de login do Eccomerce Swag Labs
    Quando o usuário submeter as credenciais com username e password válidos
    Então ao clicar em Login verá a página de Products

  Cenário: Validar fluxo de login com falha
    Dado que o usuário está na página de login do Eccomerce Swag Labs
    Quando o usuário submeter username ou password incorreto
    Então ao clicar em Login verá a mensagem de erro "Epic sadface: Username and password do not match any user in this service"

  Esquema do Cenário: Validar login com campos vazios
    Dado que o usuário está na página de login do E-commerce Swag Labs
    Quando deixar o campo <campo> vazio e preencher o outro corretamente
    Então ao clicar em Login verá a mensagem de erro "<mensagem_erro>"

    Exemplos:
      | campo    | mensagem_erro                        |
      | username | Epic sadface: Username is required   |
      | password | Epic sadface: Password is required   |

  Cenário: Visualizar produto
    Dado que o usuário esteja logado
    Quando clicar no produto "Sauce Labs Bolt T-Shirt"
    Então será direcionado para a descrição do produto

  Cenário: Adicionar produto no carrinho
    Dado que o usuário esteja logado
    Quando clicar em "Add to cart" do produto "Sauce Labs Bolt T-Shirt"
    E clicar no ícone do carrinho de compras
    Então será direcionado para a página do carrinho de compras

  Cenário: Remover produto do carrinho
    Dado que o usuário esteja logado e na página do carrinho de compras
    Quando clicar em "Remove" 
    Então verá a página sem o produto

  Cenário: Fluxo completo de compra
    Dado que o usuário esteja logado
    E clique em "Add to cart" no produto "Sauce Labs Backpack"
    Quando acessar o carrinho, clicar em "Checkout" e preencher os campos obrigatórios
    Então ao clicar em "Finish" irá ver a mensagem de sucesso "Thank you for your order!"
 
