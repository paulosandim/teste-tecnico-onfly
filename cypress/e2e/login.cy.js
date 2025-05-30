describe('Testes de Login - E-commerce Swag Labs', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('Login com sucesso', () => {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.url().should('include', '/inventory.html');
    cy.contains('Products').should('be.visible');
  });

  it('Login com credenciais inválidas', () => {
    cy.get('[data-test="username"]').type('usuario_errado');
    cy.get('[data-test="password"]').type('senha_errada');
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should('contain', 'Username and password do not match');
  });

  it('Login com campo username vazio', () => {
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should('contain', 'Username is required');
  });

  it('Login com campo password vazio', () => {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should('contain', 'Password is required');
  });

});
