describe("Login", () => {
  it("login check", () => {
    cy.visit("https://credor-app.azurewebsites.net/login");

    cy.get("#login_email").type("admin@credor.com");

    cy.get("#login_password").type("Excel@123");

    cy.get("#login_submit").click();

    cy.url().should("contains", "admin-dashboard");
  });
});
