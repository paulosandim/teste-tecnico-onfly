#language: pt

Funcionalidade: Testes da API Go REST

  Cenário: Criação de um novo usuário
    Dado que o usuário possui um payload válido para criação
    Quando o cliente envia uma requisição POST para "/users"
    Então a API deve responder com o status 201 Created
    E o corpo da resposta deve conter os dados do novo usuário com um ID gerado

  Cenário: Consultar todos os usuários
    Quando o cliente envia uma requisição GET para "/users"
    Então a API deve responder com o status 200 OK
    E o corpo da resposta deve conter uma lista de usuários

  Cenário: Buscar por um usuário específico
    Dado que existe um usuário com <id_usuario>
    Quando o cliente envia uma requisição GET para "/users/id_usuario"
    Então a API deve responder com o status 200 OK
    E o corpo da resposta deve conter os dados do usuário com <id_usuario>

  Cenário: Editar um usuário específico
    Dado que existe um usuário com <id_usuario>
    E o cliente possui um payload com os dados atualizados
    Quando o cliente envia uma requisição PUT para "/users/id_usuario"
    Então a API deve responder com o status 200 OK
    E o corpo da resposta deve refletir as alterações realizadas no usuário

  Cenário: Excluir um usuário específico
    Dado que existe um usuário com <id_usuario>
    Quando o cliente envia uma requisição DELETE para "/users/id_usuario"
    Então a API deve responder com o status 204 No Content
    E o usuário com <id_usuario> não deve mais estar disponível ao consultar "/users/id_usuario"
    