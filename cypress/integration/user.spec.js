describe( 'Users page', () => {


  beforeEach(() => {
    cy.visit( '/users' );
  });

  it ( 'should have the right URL', () => {
    cy.url().should('include', '/users')
  });
});
