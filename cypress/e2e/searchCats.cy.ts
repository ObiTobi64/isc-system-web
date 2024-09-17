describe('Google Search Test', () => {
    it('should search for "gatitos" on Google', () => {
      cy.visit('https://www.google.com');
  
      cy.get('textarea[name="q"]').should('be.visible').type('gatitos{enter}'); 
  
      cy.url().should('include', 'q=gatitos'); 
  
      cy.contains('gatitos').should('exist'); 
    });
  });
  