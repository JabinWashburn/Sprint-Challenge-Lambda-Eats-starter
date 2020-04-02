describe("Test our inputs and submit our form", function(){
    beforeEach(function(){
        cy.visit("http://localhost:3000/");
    })
    it("Add text to input and submit form", function(){
        cy.get('.order-here')
          .click('center')
          cy.get('[for="name"] > input')
          .type('Jabin Washburn')
          cy.get(':nth-child(3) > input')
          .click('center')
          cy.get(':nth-child(4) > input')
          .click('center')
          cy.get('button')
            .click('center')
    })
});
