describe('Hits Home Page', () => {
  it('passes', () => {
<<<<<<< HEAD
    cy.visit('https://hangryhippo.quantic.host/');
=======
    cy.visit('http://hangryweb-env.eba-vdyerazm.us-east-1.elasticbeanstalk.com/');
>>>>>>> lesson-6
  });
  it('displays the Welcome message', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are is a Welcome message.
    cy.get('h1').should(
      'have.text',
      "Welcome to Hangry Hippo! Hungry? Let's get started!"
    );
  });
  it('shows the Menu items', () => {
    //Check for the Appeteasers menu item
    cy.get('[data-testid=category-item]')
      .should('be.visible')
      .and('contain', 'Appeteasers');

    //Check for the Handhelds menu item
    cy.get('[data-testid=category-item]')
      .should('be.visible')
      .and('contain', 'Handhelds');
  });
});

describe('Hits Order Page', () => {
  it('passes', () => {
<<<<<<< HEAD
    cy.visit('https://hangryhippo.quantic.host/order');
=======
    cy.visit('http://hangryweb-env.eba-vdyerazm.us-east-1.elasticbeanstalk.com/order');
>>>>>>> lesson-6
  });
  it('shows Your Order title', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    //Check to see if 'Your Order' exists
    cy.get('h3').should('have.text', 'Your Order');
  });
});
