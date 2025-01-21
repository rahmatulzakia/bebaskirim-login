describe('Login in SIT Bebaskirim', () => {
  it('Login - SIT', () => {
    cy.visit('https://sit-app.bebaskirim.com/login');
    cy.get('#email').type('rahmatulzakia@gmail.com');
    cy.get('#password').type('Zakia1512#');
    cy.get('.btn').click();

  })
})