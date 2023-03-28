export function loginViaUi (loging) {
    cy.log('**Open web home page**')
    cy.visit('/')
    cy.log('Searching LogIn form')
    cy.get('a:contains("Login or register")').click()
    cy.get('#loginFrm_loginname').clear()
        .type(loging.loginName)
    cy.get('#loginFrm_password').clear()
        .type(loging.pasw)
    cy.get('button[title="Login"]').click()
}