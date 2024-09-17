describe('Simulación de búsqueda de vuelos en Skyscanner', () => {
    it('Debería buscar vuelos de Nueva York a Londres', () => {
        cy.visit('https://www.skyscanner.net/');

        cy.get('button[title="Accept all"]').click({ force: true });

        cy.get('[aria-label="Departure airport"]').click({ force: true });
        cy.get('input[placeholder="Where from?"]').type('New York');

        cy.get('.BpkAutosuggest_bpk-autosuggest__suggestion').first().click();
        cy.get('[aria-label="Destination airport"]').click({ force: true });
        cy.get('input[placeholder="Where to?"]').type('London');

        cy.get('.BpkAutosuggest_bpk-autosuggest__suggestion').first().click();

        cy.get('input[aria-label="Depart"]').click({ force: true });
        cy.get('.CalendarDatePicker_button').contains('25').click();  
        cy.get('.CalendarDatePicker_button').contains('30').click();  

        cy.get('button[type="submit"]').contains('Search flights').click();

        cy.wait(10000);

        cy.get('.results').should('exist');

        cy.contains('New York').should('exist');
        cy.contains('London').should('exist');
    });
});
