describe('Cypress Test', () => {
  it('should visit the Cypress website', () => {
    cy.visit('https://www.cypress.io');
    cy.contains('JavaScript End to End Testing Framework');
  });
});