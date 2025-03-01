// produtoPage.js
  class ProdutoPage {
      visit() {
        cy.visit("/produtos"); 
      }
    
    selecionarProduto() {
      
      cy.get('.product-block', {timeout: 4000}).eq(3).click();
    }
  
    escolherModelo() {
      cy.get('.button-variable-item-S', {timeout: 4000}).should("exist").should("be.visible").click()

      cy.get('.button-variable-item-Red').click();
      cy.get('.input-text').clear().type(2);
    }
  
    adicionarAoCarrinho() {
      cy.get('.single_add_to_cart_button').click();
    }
  
  }

  
  export default ProdutoPage;
  