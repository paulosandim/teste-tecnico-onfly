import { products, cart, checkout } from '../support/pages';

describe('Testes de Compra - E-commerce Swag Labs', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.login()
  });

  it('Visualizar um produto', () => {
    cy.contains('Sauce Labs Bolt T-Shirt').click();
    cy.get('.inventory_details_name').should('contain', 'Sauce Labs Bolt T-Shirt');
  });

  it('Adicionar produto ao carrinho e acessar o carrinho', () => {
    cy.get(products.addToCartButton('Sauce Labs Bolt T-Shirt')).click();
    cy.get(cart.link).click();
    cy.get(cart.item).should('contain', 'Sauce Labs Bolt T-Shirt');
  });

  it('Remover produto do carrinho', () => {
    cy.get(products.addToCartButton('Sauce Labs Bolt T-Shirt')).click();
    cy.get(cart.link).click();
    cy.get(cart.removeButton('sauce-labs-bolt-t-shirt')).click();
    cy.get(cart.item).should('not.exist');
  });

  it('Executar fluxo completo de compra', () => {
    cy.get(products.addToCartButton('Sauce Labs Backpack')).click();
    cy.get(cart.link).click();

    cy.get(cart.checkoutButton).click();
    cy.get(checkout.firstName).type('João');
    cy.get(checkout.lastName).type('Silva');
    cy.get(checkout.postalCode).type('12345');
    cy.get(checkout.continueButton).click();
    cy.get(checkout.finishButton).click();

    cy.contains('Thank you for your order!').should('be.visible');
    cy.get(checkout.goHome).click()
  });
});