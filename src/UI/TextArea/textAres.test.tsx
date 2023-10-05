import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import "@testing-library/jest-dom";

import { TextArea } from ".";

describe("TextArea", () => {
    it("renders an textarea", async () => {
        render(<TextArea placeholder="textarea" />);
        expect(screen.getByPlaceholderText("textarea")).toBeInTheDocument();

        await userEvent.click(screen.getByPlaceholderText("textarea"));
        await userEvent.type(screen.getByPlaceholderText("textarea"), "testing item");

        expect(screen.getByPlaceholderText("textarea")).toHaveValue("testing item");
    });
});
