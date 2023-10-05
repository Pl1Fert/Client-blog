describe("contactForm E2E", () => {
    beforeEach(() => {
        cy.visit("/en/contact");
    });

    it("should send email", () => {
        cy.get("input[name='email']").eq(0).as("input");
        cy.wait(2000);
        cy.get("@input").click();
        cy.get("@input").type("test@gmail.com");
        cy.get("@input").should("have.value", "test@gmail.com");

        cy.get("input[name='name']").as("input1");
        cy.wait(2000);
        cy.get("@input1").click();
        cy.get("@input1").type("TestName");
        cy.get("@input1").should("have.value", "TestName");

        cy.get("textarea[name='message']").as("textarea");
        cy.wait(2000);
        cy.get("@textarea").click();
        cy.get("@textarea").type("TestMessage");
        cy.get("@textarea").should("have.value", "TestMessage");

        cy.get("select[name='query']").as("select");
        cy.wait(2000);
        cy.get("@select").select("Problem");
        cy.get("@select").should("have.value", "Problem");

        cy.get("button").contains("Send Message").click();

        cy.get("@input1").should("have.value", "");
        cy.get("@input1").should("have.value", "");
        cy.get("@textarea").should("have.value", "");
    });

    it("should catch invalid inputs", () => {
        cy.get("input[name='email']").eq(0).as("input");
        cy.wait(2000);
        cy.get("@input").click();
        cy.get("@input").type("testgmail.com");
        cy.get("@input").should("have.value", "testgmail.com");

        cy.get("input[name='name']").as("input1");
        cy.wait(2000);
        cy.get("@input1").click();
        cy.get("@input1").type("TestName");
        cy.get("@input1").should("have.value", "TestName");

        cy.get("textarea[name='message']").as("textarea");
        cy.wait(2000);
        cy.get("@textarea").click();
        cy.get("@textarea").type("TestMessage");
        cy.get("@textarea").should("have.value", "TestMessage");

        cy.get("select[name='query']").as("select");
        cy.wait(2000);
        cy.get("@select").select("Problem");
        cy.get("@select").should("have.value", "Problem");

        cy.get("button").contains("Send Message").click();

        cy.get("@input").should("have.value", "testgmail.com");
        cy.get("@input1").should("have.value", "TestName");
        cy.get("@textarea").should("have.value", "TestMessage");
    });
});
