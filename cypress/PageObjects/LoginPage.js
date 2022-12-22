class Login {
  setUserName(username) {
    cy.get("#login_email").type(username);
  }
  setPassword(password) {
    cy.get("#login_password").type(password);
  }
  clickSubmit() {
    cy.get("#login_submit").click();
  }
  verifyLogin() {
    cy.url().should("contains", "admin-dashboard");
  }
}
export default Login;
