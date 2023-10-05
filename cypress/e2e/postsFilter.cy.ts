describe("postsFilter E2E", () => {
    beforeEach(() => {
        cy.visit("/en/categories/Startup");
    });

    it("should filter on tag click", () => {
        cy.get('[data-cy="item"]').should("have.length", 4);

        cy.get('[data-cy="item"]').eq(-1).click();
        cy.get('[data-cy="item"]').should("have.length", 2);
    });

    it("should filter on input change", () => {
        cy.get("input[name='searchTag']").as("search");
        cy.wait(2000);
        cy.get("@search").click();
        cy.get("@search").type("l");
        cy.get("@search").should("have.value", "l");

        cy.get('[data-cy="item"]').should("have.length", 2);
    });
});
