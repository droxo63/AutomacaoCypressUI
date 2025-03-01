/// <reference types = "cypress"/>

import ProdutoPage from '../support/pages/produtoPage';
import CarrinhoPage from '../support/pages/carrinhoPage';
import CheckoutPage from '../support/pages/checkoutPage';

describe('Checkout dos produtos no carrinho', () => {
  

    const produtoPage = new ProdutoPage();
    const carrinhoPage = new CarrinhoPage();
    const checkoutPage = new CheckoutPage()
 

  it('Passo a passo de adicionar produtos', () => {
    //adicionando produto no carrinho
    produtoPage.visit()
    produtoPage.selecionarProduto()
    produtoPage.escolherModelo()
   produtoPage.adicionarAoCarrinho()
   carrinhoPage.verificarCarrinho()
   carrinhoPage.verificarProdutoNoCarrinho()
    carrinhoPage.irParaCheckout()
   
  }); 
    //preenchimento de tela de checkout

    it.skip("Deve preencher o checkout corretamente", function () {
      cy.fixture("checkoutData").then((dadosCheckout) => {
        checkoutPage.preencherDados(dadosCheckout);
        checkoutPage.concluirCompra();
      });
    });
});
 