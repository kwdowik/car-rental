describe('Cars Feed', () => {
  it('renders loading', () => {
    cy.visit('/');

    cy.findByRole('button', { name: /get ✅/i }).click();
    cy.findByText(/loading.../i).should('be.visible');
  });
  it('renders cars feed', () => {
    cy.visit('/');

    cy.findByRole('button', { name: /get ✅/i }).click();

    cy.findAllByRole('listitem').should('have.length', 13);
  });
  it('renders cars feed after retry', () => {
    cy.visit('/');
    cy.findByRole('button', { name: /get ❎/i }).click();

    cy.findByText(/not found/i).should('be.visible');

    cy.findByRole('button', { name: /retry 🔄/i }).click();
    cy.findAllByRole('listitem').should('have.length', 13);
  });
});