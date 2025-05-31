#language: pt

Funcionalidade: Testes de Compra no E-commerce Swag Labs

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
 
