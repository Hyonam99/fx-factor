import React from "react";
import { QuickAction } from "components/components-exports";
import { _render, act, waitFor } from "utils/routerWrapper";
import userEvent from "@testing-library/user-event";

jest.mock("api/index", () => {
	return {
		API_KEY: "test",
		API_KEY_U: "test",
		API_KEY_D: "test",
	};
});

describe("QuickAction component", () => {
	it("renders properly", async () => {
		const { getByTestId, getAllByRole, getAllByTestId, getByTitle } = _render(<QuickAction />);
        const quickActionButton = getByTitle("quick-action-icon")
        expect(getByTestId("quick-action-component")).toBeInTheDocument()
        expect(quickActionButton).toBeInTheDocument()

        act(() => {
            userEvent.click(quickActionButton)
        })

        await waitFor(() => expect(getAllByTestId("quick-action-buttons")).toHaveLength(3))
        
        const quickActionLinks = getAllByRole("link")
        expect(quickActionLinks).toHaveLength(3)
        expect(quickActionLinks[0]).toHaveAttribute("href", "mailto:trade.fxfactor@gmail.com")
        expect(quickActionLinks[1]).toHaveAttribute("href", "tel:08100905654")
        expect(quickActionLinks[2]).toHaveAttribute("href", "https://wa.link/6qt9k3")
	});
});
