import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import "@testing-library/jest-dom";

import { Input } from ".";

describe("Input", () => {
    it("renders an input", async () => {
        render(<Input placeholder="input" />);
        expect(screen.getByPlaceholderText("input")).toBeInTheDocument();

        await userEvent.click(screen.getByPlaceholderText("input"));
        await userEvent.type(screen.getByPlaceholderText("input"), "testing item{enter}");

        expect(screen.getByPlaceholderText("input")).toHaveValue("testing item");
    });
});
