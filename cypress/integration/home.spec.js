describe( 'Home page', () => {
  beforeEach(() => {
    cy.visit( '/home' );
  });

  it ( 'should have the right URL', () => {
    cy.url().should('include', '/home')
  });
});
