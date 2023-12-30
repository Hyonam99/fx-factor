import React from "react";
import { UserNav } from "components/components-exports";
import { _render, act, waitFor } from "utils/routerWrapper";
import { Links } from "mocked-data/mocked-data";
import userEvent from "@testing-library/user-event";

jest.mock("api/index", () => {
	return {
		API_KEY: "test",
		API_KEY_U: "test",
		API_KEY_D: "test",
	};
});

describe("Navbar component", () => {

    it("renders properly on desktop", () => {
        const { getAllByTestId, getByAltText, getByRole } = _render(<UserNav />)

        expect(getByRole("navigation")).toBeInTheDocument()
        expect(getByAltText("fx-factor-logo-full")).toBeInTheDocument()
        expect(getByAltText("fx-factor-logo-short")).toBeInTheDocument()

        const desktopLinks = getAllByTestId("desktop-nav-links")
        expect(desktopLinks).toHaveLength(4)

        desktopLinks.map((link, i) => {
            expect(link).toHaveAttribute("href", Links[i].linkUrl)
        })

    })

    it("renders properly on mobile", async () => {
        const { getAllByTestId, getByAltText, getByRole, getByTitle, getByTestId } = _render(<UserNav />)

        expect(getByRole("navigation")).toBeInTheDocument()
        expect(getByAltText("fx-factor-logo-short")).toBeInTheDocument()

        const hamburgerMenu = getByTitle("menu-open")

        act(() => {
            userEvent.click(hamburgerMenu)
        })

        await waitFor(() => expect(getByTestId("mobile-menu-drawer")).toBeInTheDocument())

        const closeMenuBtn = getByTitle("menu-close")

        const mobileLinks = getAllByTestId("mobile-nav-links")
        expect(mobileLinks).toHaveLength(4)

        mobileLinks.map((link, i) => {
            expect(link).toHaveAttribute("href", Links[i].linkUrl)
        })

        
        act(() => {
            userEvent.click(closeMenuBtn)
        })

        expect(getByTitle("menu-open")).toBeInTheDocument()
        

    })
})
