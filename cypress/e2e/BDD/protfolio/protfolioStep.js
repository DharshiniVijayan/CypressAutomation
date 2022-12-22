import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import Login from "../../../PageObjects/LoginPage";

const ln = new Login();

//login stepdefination
Given("User is in login page", () => {
  cy.visit("/login");
});
When("User enter user name", () => {
  ln.setUserName("admin@credor.com");
});
And("User enter password", () => {
  ln.setPassword("Excel@123");
});
And("User clicks on the login button", () => {
  ln.clickSubmit();
});
Then("User is in home page", () => {
  ln.verifyLogin();
});

// Add New Offering - shows validation message
Given("User clicks on protfolio module", () => {
  cy.get("#sidebar_portfolio").click();
});
When("User clicks add new offering", () => {
  cy.get("#Portfolio_addnewoffering").click();
});
And("User clicks on next without entering mandatory field", () => {
  cy.get("#Portfolio_addofferingshow_aof_next").click();
});
Then("Validation message appears", () => {
  cy.contains("Offering Name is required").should("be.visible");
});

// Add New Offering -form reset upon clicking add new offering

When("User enter data in input name field", () => {
  cy.get("[placeholder='Enter Offering Name']").type("john");
});
And("User select selects offering type drop down", () => {
  cy.get("[name='offeringType']").eq(0).select("Investment");
});
And("User closes the add new offering form", () => {
  cy.get("#Portfolio_addofferingshow_aof_cancel").click();
});
When("User clicks add new offering", () => {
  cy.get("#Portfolio_addnewoffering").click();
});
Then("Display new offering form", () => {
  cy.get("#Portfolio_addofferingshow_aof_offeringname").should("be.empty");
});

// Add New Offering -Placeholder is available in all input field

Then("Placeholder available in all input field", () => {
  cy.get("#Portfolio_addofferingshow_aof_offeringtype")
    .find("option:selected")
    .should("have.text", " Select ");
});

// Multiple selecter can be done in select visibility box

Then("User selects more than one option in select visibility drop down", () => {
  cy.get(".multiselect-dropdown").click()
  cy.xpath("//li[@class='multiselect-item-checkbox'][3]").click()
  cy.get(".multiselect-dropdown").click()
  cy.xpath("//li[@class='multiselect-item-checkbox'][5]").click()
});
