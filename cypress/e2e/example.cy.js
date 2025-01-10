describe('Cypress Test', () => {
  it('should visit the local test page', () => {
    cy.visit('cypress/static/index.html');
    cy.contains('JavaScript End to End Testing Framework');
  });
});