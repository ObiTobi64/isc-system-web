describe('GitHub Actions Test', () => {
  it('should login and create a new repository named "NaviProject"', () => {
    
    cy.visit('https://github.com/login')
    cy.get('input[name="login"]').type(Cypress.env('USERNAME')) 
    cy.get('input[name="password"]').type(Cypress.env('PASSWORD')) 
    cy.get('input[name="commit"]').click()

    cy.url({timeout: 10000}).should('eq', 'https://github.com/')

    cy.get('input[name="repository[name]"]', {timeout: 10000}).should('be.visible').type('NaviProject')

    cy.get('button[data-test-selector="create-repository"]', {timeout: 10000}).should('be.visible').click()

    cy.url({timeout: 10000}).should('include', '/NaviProject')

    cy.get('a[href="/Create a new repository"]', {timeout: 10000}).should('be.visible').click()

    cy.url({timeout: 10000}).should('include', '/Create a new repository')

  })
})
