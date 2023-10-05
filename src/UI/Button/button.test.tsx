import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import { Button } from ".";

describe("Button", () => {
    it("renders a Button", () => {
        render(<Button>button</Button>);
        expect(screen.getByText("button")).toBeInTheDocument();
    });
});
