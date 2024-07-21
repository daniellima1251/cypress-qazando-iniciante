/// <reference types="cypress"/>

//dar um export para pagina ser exportada e chamada 
export default {
//acessando a aplicação e garantindo através do get pegando
//um elemento da tela que estou na url
    acessarCadastroUsuario() {
        cy.visit('/')
            .get('#top_header')

        cy.get('.fa-lock')    
          .click()        
    },

    acessarLogin(){

        cy.visit('/')
            .get('#top_header')

        cy.get('.fa-user')    
          .click()  


    }
}