/// <reference types="cypress"/>

const elements = {
    buttons: {
        btnRegister: 'button#btnRegister'
    },
    msg: {
        erro: '.errorLabel',
        sucesso1: '#swal2-title',
        sucesso2: '#swal2-html-container'
    },

    fields: {
        nome: 'input#user',
        email: '#email',
        senha: '#password'
    },

}

export default {
    clicarCadastrar() {
        //para clicar no botão cadastrar
        cy.get(elements.buttons.btnRegister)
            .click()

    },

    //verificando se o elemento esta visivel
    //verificando por parametro passado no it a msg
    validarMensagemErro(mensageErro) {
        cy.get(elements.msg.erro)
            .scrollIntoView()
            .then((element) => {
                expect(element).to.be.visible
                expect(element.text()).eq(mensageErro)

            })

        //Outra forma de validar com should 
        cy.get(elements.msg.erro)
            .scrollIntoView()
            .should('be.visible')
            .should('have.text', mensageErro)


    },

    preencheNome(nome) {
        cy.get(elements.fields.nome)
            .type(nome, { delay: 0 })

    },

    preencheEmail(email) {
        cy.get(elements.fields.email)
            .type(email, { delay: 0 })

    },

    preencheSenha(senha) {
        cy.get(elements.fields.senha)
            .type(senha, { delay: 0 })

    },

    validarCadastroSucess(nome) {
        cy.get(elements.msg.sucesso1)
            .should('be.visible')
            .then((element) => {
                expect(element.text()).eq('Cadastro realizado!')
            })

        cy.get(elements.msg.sucesso2)
            .should('be.visible')
            .then((element) => {
                expect(element.text()).eq('Bem-vindo ' + nome)
            })

        //outra forma de validar a msg concatenando com o nome
        cy.get(elements.msg.sucesso2)
            .should('be.visible')
            .then((element) => {
                expect(element.text()).eq(`Bem-vindo ${nome}`)
            })
        cy.screenshot()


    },



}