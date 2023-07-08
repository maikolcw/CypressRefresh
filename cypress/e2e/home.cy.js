describe("home page", () => {
  it("the h1 contains the correct text", () => {
    cy.visit("http://localhost:3000")
    cy.get("h1")
    .should('exist')
    .contains("Testing Next.js Applications with Cypress")
  })

  // better practice is to find element with data-test attribute
  it("the h1 contains the correct text", () => {
    cy.visit("http://localhost:3000")
    cy.get(`[data-test="hero-heading"]`)
    .should('exist')
    .contains("Testing Next.js Applications with Cypress")
  })
})
