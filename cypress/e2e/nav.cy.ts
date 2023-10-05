describe("nav E2E", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it('home link should be active when url is "/"', () => {
        cy.get("a")
            .contains("Home")
            .should("have.css", "cursor", "default")
            .should("have.attr", "href");
    });

    it("Blog link shoud be active when clicked", () => {
        cy.get("a").contains(/^Blog/).should("have.attr", "href");
        cy.get("a").contains(/^Blog/).click();
        cy.wait(2000);
        cy.get("a").contains(/^Blog/).should("have.css", "cursor", "default");
    });

    it("About Us link shoud be active when clicked", () => {
        cy.get("a").contains("About Us").should("have.attr", "href");
        cy.get("a").contains("About Us").click();
        cy.wait(2000);
        cy.get("a").contains("About Us").should("have.css", "cursor", "default");
    });

    it("Contact Us link shoud be active when clicked", () => {
        cy.get("a").contains("Contact Us").should("have.attr", "href");
        cy.get("a").contains("Contact Us").click();
        cy.wait(2000);
        cy.get("a").contains("Contact Us").should("have.css", "cursor", "default");
    });

    it("Privacy Policy Us link shoud be active when clicked", () => {
        cy.get("a").contains("Privacy Policy").should("have.attr", "href");
        cy.get("a").contains("Privacy Policy").click();
        cy.wait(2000);
        cy.get("a").contains("Privacy Policy").should("have.css", "cursor", "default");
    });
});
