import { loginPage, inventoryPage } from '../support/pages'

describe('Testes de Login - E-commerce Swag Labs', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Validar login com sucesso', () => {
    cy.login()
    cy.url().should('include', '/inventory.html')
    cy.get(inventoryPage.title).should('contain', 'Products')
  })

  it('Validar login com credenciais inválidas', () => {
    cy.get(loginPage.usernameInput).type('usuario_errado')
    cy.get(loginPage.passwordInput).type('senha_errada')
    cy.get(loginPage.loginButton).click()
    cy.get(loginPage.errorMessage).should('contain', 'Username and password do not match')
  })

  it('Validar login com campo username vazio', () => {
    cy.get(loginPage.passwordInput).type('secret_sauce')
    cy.get(loginPage.loginButton).click()
    cy.get(loginPage.errorMessage).should('contain', 'Username is required')
  })

  it('Validar login com campo password vazio', () => {
    cy.get(loginPage.usernameInput).type('standard_user')
    cy.get(loginPage.loginButton).click()
    cy.get(loginPage.errorMessage).should('contain', 'Password is required')
  })

  afterEach(function () {
    cy.screenshot(this.currentTest.title)
  })
})