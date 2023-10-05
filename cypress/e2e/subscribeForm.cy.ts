describe("subscribeForm E2E", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("should send email", () => {
        cy.get("input[name='email']").as("input");
        cy.wait(2000);
        cy.get("@input").click();
        cy.get("@input").type("test@gmail.com");
        cy.get("@input").should("have.value", "test@gmail.com");

        cy.get("button").contains("Subscribe").click();

        cy.get("input[name='email']").should("have.value", "");
    });

    it("should catch invalid email", () => {
        cy.get("input[name='email']")
            .click()
            .type("testgmail.com")
            .should("have.value", "testgmail.com");

        cy.get("button").contains("Subscribe").click();

        cy.get("input[name='email']").should("have.value", "testgmail.com");
    });
});
