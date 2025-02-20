// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Arquivo commands.js
import SignupPage from '../support/pages/signupPage';
import { faker } from '@faker-js/faker';
import { firstName, lastName, phone, email, senha } from "../fixtures/dados.json";

Cypress.Commands.add("cadastro", (firstName, lastName, email, senha) => {
  // Definindo os dados de cadastro (se não forem passados, o Faker cria dados aleatórios)
  const userFirstName = firstName || faker.name.firstName();
  const userLastName = lastName || faker.name.lastName();
 // const userPhoneNumer = phone
  const userEmail = email || `${userFirstName.toLowerCase()}.${userLastName.toLowerCase()}@teste.com`;
  const userSenha = senha || faker.internet.password();
 

  // Cookie e navegação para pagina de login
  cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' });
  cy.visit("/home");
  cy.get("[href='/Tab/Account']").click();

  // Interações com o formulário de cadastro
  SignupPage.openSignUpForm();
  SignupPage.fillForm(userFirstName, userLastName, phone, userEmail, userSenha);
  SignupPage.submitForm();

  // Verificando se o nome do usuário aparece na página de conta
  SignupPage.verifyUserName(userFirstName);
});
Cypress.Commands.add("hello", () => {
    cy.log("Hello, Cypress!");
  });