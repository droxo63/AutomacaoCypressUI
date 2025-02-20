/// <reference types = "cypress"/>

class SignupPage {
    // Definindo os seletores
    signUpButton = '[data-testid="signUp"] > .css-146c3p1';
    firstNameField = '[data-testid="firstName"]';
    lastNameField = '[data-testid="lastName"]';
    phoneField = "[placeholder='Phone Number']";
    emailField = "[placeholder='Email Address']";
    passwordField = ':nth-child(8) > .css-175oi2r > [data-testid="password"]';
    rePasswordField = '[data-testid="repassword"]';
    createButton = '[data-testid="create"]';
    customerName = '[data-testid="CustomerName"]';
    accountButton = "[href='/Tab/Account']";
  
    // Métodos de interação com a página
    openSignUpForm() {
      cy.get(this.signUpButton).click();
    }
  
    fillForm(firstName, lastName, phone, email, senha) {
      cy.get(this.firstNameField).type(firstName);
      cy.get(this.lastNameField).type(lastName);
      cy.get(this.phoneField).clear().type(phone);
      cy.get(this.emailField).type(email);
      cy.get(this.passwordField).type(senha);
      cy.get(this.rePasswordField).type(senha);
    }
  
    submitForm() {
      cy.get(this.createButton).click();
    }
  
    verifyUserName(firstName) {
    cy.get("[href='/Tab/Account']").click();
    cy.get(this.customerName).should('contain', firstName);
    }
  }
  
  // Exportando a instância da classe diretamente

  export default new SignupPage();