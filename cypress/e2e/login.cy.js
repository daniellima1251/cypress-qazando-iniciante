import { faker, Faker } from "@faker-js/faker";

import commum_page from "../support/Pages/commum_page";
import login_page from "../support/Pages/login_page";
const emailFakeJS = faker.internet.email();

describe('Login', () => {

    beforeEach('Acesso a tela de login', () => {

        commum_page.acessarLogin()
    })


    it('Validar email vazio', () => {
        login_page.clicarCadastrarLogin()
        login_page.validarErro('E-mail inválido.')


    });

    it('Validar email inválido', () => {

        login_page.preencheEmail('adsf.com.x')
        login_page.clicarCadastrarLogin()
        login_page.validarErro('E-mail inválido.')


    });
    it('Validar senha vazio', () => {
        login_page.clicarCadastrarLogin()
        login_page.preencheEmail(emailFakeJS)
        login_page.clicarCadastrarLogin()
        login_page.validarErro('Senha inválida.')



    });

    it('Validar senha incorreta', () => {
        login_page.clicarCadastrarLogin()
        login_page.preencheEmail(emailFakeJS)
        login_page.preencheSenha('123')
        login_page.clicarCadastrarLogin()
        login_page.validarErro('Senha inválida.')


    });


    it('Login realizado com sucesso', () => {
        login_page.clicarCadastrarLogin()
        login_page.preencheEmail(emailFakeJS)
        login_page.preencheSenha('123456')
        login_page.clicarCadastrarLogin()
        login_page.validarSucessoLogin(emailFakeJS)



    });

})