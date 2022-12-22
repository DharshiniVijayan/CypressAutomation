

describe('CSSLocators', () => {
    it('csslocators', () => {

        cy.visit("https://www.amazon.com/")

        cy.get("#twotabsearchtextbox").type("pencils")

        cy.get("#nav-search-submit-button").click()

        cy.get(".a-color-state.a-text-bold").contains("pencils")

    })
  })