/// <reference types = "cypress"/>
// support/commands.js
import '../support/commands.js';  // Isso garante que os comandos personalizados sejam carregados
import { firstName, lastName, phone, email, senha } from "../fixtures/dados.json";
import { faker } from '@faker-js/faker';
import SignupPage from "../support/pages/signupPage.js";

before(() => {
  cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' });
  
});

beforeEach(() => {
  cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' });
  cy.visit("/");
  cy.get("[href='/Tab/Account']").click();
  cy.login(); 

});



describe('Testes de intercept', () => {
  it('categories should be viseable', () => {
 
    cy.intercept('GET', '**/public/getCategories', {fixture: 'categories.json'}).as('getCategories')
    //openSearchproduct
    cy.get("[data-testid='search-products']").click()
    // openCategoriesFilter
    cy.get("[data-testid='Category']").click()

    cy.get("[data-testid^='search-category-']").should("have.length.greaterThan", 1)
  });

  it('categories should not be viseable', () => {

    cy.intercept('GET', '**/public/getCategories', {fixture: 'notCategorie.json'}).as('notCategories')
    //openSearchproduct
    cy.get("[data-testid='search-products']").click()
    // openCategoriesFilter
    cy.get("[data-testid='Category']").click()

    cy.get("[data-testid^='search-category-']").should("have.length", 1)
  });

  it('categories should be empty with erro', () => {

    cy.intercept('GET', '**/public/getCategories', {statusCode: 500}).as('notCategoriesError')
    //openSearchproduct
    cy.get("[data-testid='search-products']").click()
    // openCategoriesFilter
    cy.get("[data-testid='Category']").click()

    cy.get("[data-testid^='search-category-']").should("have.length", 1)
  });


});
