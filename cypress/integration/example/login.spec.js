describe('Login spec', () => {
	it('should visit the login page', () => {
		cy.visit('/');
	});

	it('should fill in the username', () => {
		cy.get('#username').clear().type('ankitpant');
	});

	it('should fill in the password', () => {
		cy.get('#password').clear().type('dummypassword');
	});

	it('should click the login', () => {
		cy.get('#login-button').click();
	});

	it('should display logged in message', () => {
		cy.get('.login-status').should('have.text', 'Logged In');
	});
});
