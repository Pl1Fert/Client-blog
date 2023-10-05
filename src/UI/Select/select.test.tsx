import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import "@testing-library/jest-dom";

import { Select } from ".";

describe("Select", () => {
    it("renders a Select", async () => {
        render(<Select label="options" options={["option 1", "option 2", "option 3"]} />);
        expect(screen.getByText("options")).toBeInTheDocument();

        await userEvent.click(screen.getByText("options"));
        await userEvent.click(screen.getByText("option 1"));

        expect(screen.getByText("option 1")).toBeInTheDocument();
    });
});
