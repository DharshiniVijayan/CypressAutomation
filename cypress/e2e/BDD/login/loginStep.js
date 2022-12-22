import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

Given("User is in login page", () => {
  cy.visit("https://credor-app.azurewebsites.net/login");
});
When("User enter user name", () => {
  cy.get("#login_email").type("admin@credor.com");
});
And("User enter password", () => {
  cy.get("#login_password").type("Excel@123");
});
And("User clicks on the login button", () => {
  cy.get("#login_submit").click();
});
Then("User is in home page", () => {
  cy.url().should("contains", "admin-dashboard");
});
