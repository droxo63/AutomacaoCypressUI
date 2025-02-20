/// <reference types = "cypress"/>
import { firstName, lastName, phone, email, senha } from "../fixtures/dados.json";

describe('Checkout dos produtos no carrinho', () => {
before(() => {
    cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' });
  });

  beforeEach(() => {
    cy.visit("/home");
    cy.get("[href='/Tab/Account']").click();
  });

  it('Passo a passo de checkout de produtos', () => {
    cy.cadastro();
    cy.visit("/home").click()
    cy.get(cy.get(':nth-child(2) > .r-18u37iz > :nth-child(1) > [data-testid="productDetails"]')).click()
   
  });
})