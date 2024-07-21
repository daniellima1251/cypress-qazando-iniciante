export default {

    clicarCadastrarLogin() {

        cy.get('.form-check-input')
            .should('be.visible')
            .check();

        cy.get('#btnLogin')
            .should('be.visible')
            .click();


    },

    validarErro(msgErro) {
        cy.get('.invalid_input')
            .should('be.visible')
            .then((element) => {
                expect(element.text()).eq(msgErro)


            })
    },

    preencheEmail(email) {
        cy.get('#user')
        cy.should('be.visible')
            .type(email)
    },

    preencheSenha(senha) {
        cy.get('#password')
        cy.should('be.visible')
            .type(senha, {delay:0})
    },

    validarSucessoLogin(email) {
        cy.get('#swal2-title')
            .should('be.visible')
            .then((element) => {
                expect(element.text()).eq('Login realizado')

            })

        cy.get('#swal2-html-container')
            .should('be.visible')
            .then((element) => {
                expect(element.text()).eq(`Olá, ${email}`)

            })







    }





}

