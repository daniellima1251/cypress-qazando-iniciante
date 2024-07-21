
import { faker } from '@faker-js/faker';
import commum_page from '../support/Pages/commum_page'
import cadastro_usuario_page from '../support/Pages/cadastro_usuario_page'

const nomeFakeJS = faker.person.fullName();
const emailFakeJS = faker.internet.email();


describe('Cadastro realizado com sucess', () => {


    beforeEach(('Acessar o cadastro de usuário'), () => {

        commum_page.acessarCadastroUsuario();

    })
    it('Campo Nome vazio', () => {
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemErro('O campo nome deve ser prenchido')

    });

    it('Campo Email vazio', () => {
        cadastro_usuario_page.preencheNome(nomeFakeJS)
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')


    });

    it('Campo Email inválido', () => {
        cadastro_usuario_page.preencheNome(nomeFakeJS)
        cadastro_usuario_page.preencheEmail('adfadf.com')
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')

        
    });
    

    it('Campo Senha vazio', () => {
        cadastro_usuario_page.preencheNome(nomeFakeJS, )
        cadastro_usuario_page.preencheEmail(emailFakeJS)
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')
        

    });

    it('Campo Senha inválido', () => {
        cadastro_usuario_page.preencheNome(nomeFakeJS)
        cadastro_usuario_page.preencheEmail(emailFakeJS)
        cadastro_usuario_page.preencheSenha('123')
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')
        

    });

    it('Cadastro realizado com sucesso', () => {
        cadastro_usuario_page.preencheNome(nomeFakeJS)
        cadastro_usuario_page.preencheEmail(emailFakeJS)
        cadastro_usuario_page.preencheSenha('123456')
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarCadastroSucess(nomeFakeJS)
        

    });

})