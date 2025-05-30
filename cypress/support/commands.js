Cypress.Commands.add('login', (username, password) => {
  cy.get('[data-test="username"]').type(username);
  cy.get('[data-test="password"]').type(password);
  cy.get('[data-test="login-button"]').click();
});

Cypress.Commands.add('addProductToCart', (productName) => {
  cy.contains(productName).parents('.inventory_item').find('button').click();
});

Cypress.Commands.add('checkout', (firstName, lastName, postalCode) => {
  cy.get('[data-test="checkout"]').click();
  cy.get('[data-test="firstName"]').type(firstName);
  cy.get('[data-test="lastName"]').type(lastName);
  cy.get('[data-test="postalCode"]').type(postalCode);
  cy.get('[data-test="continue"]').click();
  cy.get('[data-test="finish"]').click();
});