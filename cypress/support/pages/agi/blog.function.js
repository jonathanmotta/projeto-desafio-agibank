const blogData = require('./blog.data');
const blogElement = require('./blog.element');

module.exports = { 
    
    clickLens: function(){             
        cy.get(blogElement.searchOpen).click()         
    },

    fillInSpecificArticle: function(){
        cy.get(blogElement.searchField).clear().type(blogData.personalLoan)   
    },

    fillOutSearchThatReturnsNoResults: function(){
        cy.get(blogElement.searchField).clear().type(blogData.searchThatReturnsNoResults)   
    },

    clickSearchButton: function(){        
        cy.get(blogElement.searchButton).click({force:true})        
    },

    assertTextArticle: function(){
        cy.contains(blogData.assertTextPersonalLoan).should('to.have.length', 1)
    },

    assertTextNoSearchResults: function(){
        cy.contains(blogData.assertTextNoResults).should('to.have.length', 1)        
    },

}