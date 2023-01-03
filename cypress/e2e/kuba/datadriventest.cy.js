describe("My First Test", () => {
  it("datadriventest", () => {
    cy.fixture("kuba2").then((data) => {
      cy.visit("https://ik2dev.kuba.no/ik/login");

      data.forEach((userdata) => {
        cy.get("input[name='username']").type(userdata.username);
        cy.get("input[name='password']").type(userdata.password);
        cy.get(".btn.btn-primary.btn-block").click();

        if (
          userdata.username == "adminik" &&
          userdata.password == "2424askig"
        ) {
          cy.wait(5000);
          cy.url().should("contains", userdata.expected);
          cy.get(
            "a[id='profileSetting'] img[class='user-img ng-star-inserted']"
          ).click();
          cy.get("a[ng-reflect-router-link='/login']").click();
        } else {
          //cy.wait(1000);
          cy.get("alert alert-danger mbtm-10 ng-star-inserted").should(
            "have.text",
            userdata.expected
          );
          cy.log("wrong username and password");
        }
      });
    });
  });
});
