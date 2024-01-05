import React from "react"
import { _render, act } from "utils/routerWrapper";
import { FAQ } from "pages/page-exports";
import userEvent from "@testing-library/user-event";

jest.mock("api/index", () => {
    return {
        API_KEY: 'test',
        API_KEY_U: 'test',
        API_KEY_D: 'test'
    };
})

describe("FAQ Page", () => {
    it("renders the FAQ page without crashing", () => {
        const { getByTestId, getAllByTestId, getByText, getAllByTitle } = _render(<FAQ />)
        const randomIndex = Math.floor(Math.random() * 6);

        expect(getByTestId("faq-container")).toBeInTheDocument()
        expect(getByText("Faq")).toBeInTheDocument()

        const accordionCards = getAllByTestId("accordion-container")
        const accordionDetails = getAllByTestId("accordion-details")
        const expandIcon = getAllByTitle("expand-icon")

        expect(accordionCards).toHaveLength(6)
		expect(expandIcon).toHaveLength(6)
        accordionDetails.map(detail => {
			expect(detail).not.toBeVisible()
		})

        act(() => {
            userEvent.click(expandIcon[randomIndex])
        })

        expect(accordionCards[randomIndex]).toBeVisible()

    })
})
