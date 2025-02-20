/// <reference types = "cypress"/>
import { firstName, lastName, phone, email, senha } from "../fixtures/dados.json";
import { faker } from '@faker-js/faker';
import SignupPage from "../support/pages/signupPage";
describe('Faz o cadastro de conta de novo usuario', () => {
    
  before(() => {
    cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' });
  });

  beforeEach(() => {
    cy.visit("/home");
    cy.get("[href='/Tab/Account']").click();
  });

  it('Cadastrar usuario', () => {
    // Gerando dados aleatórios com faker
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    
    const senha = faker.internet.password();
    const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@teste.com`;

    // Interações com o formulário de cadastro
    SignupPage.openSignUpForm()  
    SignupPage.fillForm(firstName, lastName, phone, email, senha)
    SignupPage.submitForm()


    // Verificando se o nome do usuário aparece na página de conta
    
    SignupPage.verifyUserName(firstName)
  });

});
