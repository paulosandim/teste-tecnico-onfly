#language: pt

Funcionalidade: Testes de Login no E-commerce Swag Labs

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
 
