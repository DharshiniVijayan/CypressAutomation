describe('Login', () => {
    it('login check', () => {

        cy.visit("https://credor-app.azurewebsites.net/login")

        cy.get("#login_email").type("admin@credor.com")

        cy.get("#login_password").type("Excel@123")

        cy.get("#login_submit").click()

    })


it('addnewoffering', () => {

        // cy.visit("https://credor-app.azurewebsites.net/login")

        cy.get("a[id='sidebar_portfolio'] span:nth-child(2)").click()

        cy.get("#Portfolio_addnewoffering").click()

        cy.get("div[class='modal-header'] h3").contains('Add New Offering')

        

    })

    it('addnewoffering', () => {

let expName="Draft";

        cy.get("#Portfolio_addofferingshow_aof_status").then( (x)=>{

let actName=x.text()

expect(actName).to.not.equal(expName)





        })




    })

    
  })
