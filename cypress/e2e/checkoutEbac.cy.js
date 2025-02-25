/// <reference types = "cypress"/>
import { firstName, lastName, phone, email, senha } from "../fixtures/dados.json";

describe('Checkout dos produtos no carrinho', () => {
before(() => {
   // cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' });
  });

  beforeEach(() => {
    cy.visit("/produtos");
    
  });

  it('Passo a passo de checkout de produtos', () => {
    cy.get('.post-3073 > .product-block > .block-inner > .image > .product-image > .image-hover').click()
    cy.get('.button-variable-item-32').scrollIntoView().click({ force: true });
    cy.get('.button-variable-item-Brown').scrollIntoView().click();
    cy.get('.plus').click()
    cy.get('.single_add_to_cart_button',{ timeout: 10000 }).should('be.visible').click({ force: true });
    
  });
})