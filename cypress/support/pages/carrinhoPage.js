// carrinhoPage.js
class CarrinhoPage {

    verificarCarrinho() {
        //cy.get('.woocommerce-message').should('contain', 'foram adicionados no seu carrinho.');
        cy.get('.woocommerce-message > .button').click();
      }
      
    verificarProdutoNoCarrinho() {
      cy.get("[data-title='Product']").should('contain', 'Ajax Full-Zip Sweatshirt - XL, Red');
    }
  
    irParaCheckout() {
      cy.get('.checkout-button').click();
    }
  }
  
  export default CarrinhoPage;
  