//describe('My First Test', () => {
//     it('fixturetest', () => {
//       cy.visit("https://ik2dev.kuba.no/ik/login")

// cy.fixture("kuba").then( (data) => {


//       cy.get("input[name='username']").type(data.username)
// cy.get("input[name='password']").type(data.password)
// cy.get(".btn.btn-primary.btn-block").click()
// cy.wait(5000)
// cy.url().should("contains", data.expected);

//     })
//   }) 
// })

// Hook method - for multiple it block 
let userdata;
before( ()=>{
  cy.fixture("kuba").then( (data) => {
  userdata=data;
  
  })

})

it('fixturetest', () => {
        cy.visit("https://ik2dev.kuba.no/ik/login")
  
  cy.fixture("kuba").then( (data) => {
  
  
        cy.get("input[name='username']").type(userdata.username)
  cy.get("input[name='password']").type(userdata.password)
  cy.get(".btn.btn-primary.btn-block").click()
  cy.wait(5000)
  cy.url().should("contains", userdata.expected);
  
      })
    }) 
  