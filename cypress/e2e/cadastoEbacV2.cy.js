/// <reference types = "cypress"/>
// support/commands.js



import '../support/commands.js';  // Isso garante que os comandos personalizados sejam carregados
import { firstName, lastName, phone, email, senha } from "../fixtures/dados.json";
import { faker } from '@faker-js/faker';
import SignupPage from "../support/pages/signupPage";

describe('Testes de cadastro', () => {
  it('Deve cadastrar um usuário com sucesso', () => {
    cy.cadastro(); // Chama o comando cadastro com dados aleatórios
  });

});
