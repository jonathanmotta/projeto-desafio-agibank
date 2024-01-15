/// <reference types="Cypress" />

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
const blog = require('../../pages/agi/blog.function');


Cypress.on('uncaught:exception', (err, runnable) => {    
    return false
  })

Given('que eu acesse o blog da agibank', () => {
    cy.visit('/')
})

When('realizar uma pesquisa de um artigo especifico', () => {
    blog.clickLens();
    blog.fillInSpecificArticle();
    blog.clickSearchButton();
})

Then('devo ver se ele foi exibido na tela com sucesso', () => {   
    blog.assertTextArticle();
})

When('realizar uma pesquisa que nao retorne nenhum resultado para os termos da busca', () => {
    blog.clickLens();
    blog.fillOutSearchThatReturnsNoResults();
    blog.clickSearchButton();
})

Then('devo ver uma mensagem na tela que nenhum resultado foi encontrado', () => {   
    blog.assertTextNoSearchResults();
})