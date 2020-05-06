describe('demo cypress test', () => {
	beforeEach(() => {
		cy.visit('/');
	});

	// it('should check the app version in the header', () => {
	// 	cy.get('.header-title').should('have.text', 'v0.0.1');
	// });

	// it('should go to correct url', () => {
	// 	cy.url().should('include', 'home');
	// 	cy.log('just a test log');
	// });

	// it('should be true', () => {
	// 	expect(true).to.equal(true);
	// });

	it('should check if user is able to login', () => {
		cy.get('.username').type('ankitpant');
		cy.get('.password').type('dummypassword');

		cy.get('.login-button').click();

		cy.get('.login-status').should('have.text', 'Logged In');
	});
});
