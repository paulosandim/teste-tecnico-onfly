describe('Teste básico para validar url', () => {
  it('should visit the login page and perform login', () => {
    
    cy.visit('/');

    cy.contains('Swag Labs').should('be.visible');
  });
});