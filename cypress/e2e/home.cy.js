describe("home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  it("the h1 contains the correct text", () => {
    cy.get("h1")
      .should('exist')
      .contains("Testing Next.js Applications with Cypress")
  })

  // better practice is to find element with data-test attribute
  it("the h1 contains the correct text", () => {
    cy.get(`[data-test="hero-heading"]`)
      .should('exist')
      .contains("Testing Next.js Applications with Cypress")
  })

  // get by data-test attribute with custom command
  it("the h1 contains the correct text", () => {
    cy.getByData("hero-heading")
      .should('exist')
      .contains("Testing Next.js Applications with Cypress")
  })

  // Updating tests reruns all tests, with .only, only this test will run
  // it.only("the features on the homepage are correct", () => {
  //   cy.get("dt")
  //     .eq(0)
  //     .contains("4 Courses")
  // })

  it("the features on the homepage are correct", () => {
    cy.get("dt")
      .eq(0)
      .contains("4 Courses")
    cy.get("dt")
      .eq(1)
      .contains("25+ Lessons")
    cy.get("dt")
      .eq(2)
      .contains("Free and Open Source")
  })
})
