describe('Fluxo de Compra - E-commerce Swag Labs', () => {

  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
  });

  it('Visualizar um produto', () => {
    cy.contains('Sauce Labs Bolt T-Shirt').click();
    cy.get('.inventory_details_name').should('contain', 'Sauce Labs Bolt T-Shirt');
  });

  it('Adicionar produto ao carrinho e acessar o carrinho', () => {
    cy.contains('Sauce Labs Bolt T-Shirt').parent().parent().find('button').click();
    cy.get('.shopping_cart_link').click();
    cy.get('.cart_item').should('contain', 'Sauce Labs Bolt T-Shirt');
  });

  it('Remover produto do carrinho', () => {
    cy.contains('Sauce Labs Bolt T-Shirt').parent().parent().find('button').click();
    cy.get('.shopping_cart_link').click();
    cy.get('[data-test="remove-sauce-labs-bolt-t-shirt"]').click();
    cy.get('.cart_item').should('not.exist');
  });

  it('Fluxo completo de compra', () => {
    cy.contains('Sauce Labs Backpack').parent().parent().find('button').click();
    cy.get('.shopping_cart_link').click();
    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="firstName"]').type('João');
    cy.get('[data-test="lastName"]').type('Silva');
    cy.get('[data-test="postalCode"]').type('12345');
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="finish"]').click();
    cy.contains('Thank you for your order!').should('be.visible');
  });

});
