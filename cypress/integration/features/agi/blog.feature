Feature: Blog da Agibank
Como usuário, gostaria de explorar o campo de pesquisa do blog da Agibank

  Background: 
    Given que eu acesse o blog da agibank

  Scenario: Realizar uma pesquisa de um artigo especifico e validar se somente ele será retornado na busca
    When realizar uma pesquisa de um artigo especifico
    Then devo ver se ele foi exibido na tela com sucesso

  Scenario: Realizar uma pesquisa que não retorne nenhum resultado para os termos da busca
    When realizar uma pesquisa que nao retorne nenhum resultado para os termos da busca
    Then devo ver uma mensagem na tela que nenhum resultado foi encontrado
