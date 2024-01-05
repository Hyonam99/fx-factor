import React from "react";
import { Featured } from "components/components-exports";
import { _render, act } from "utils/routerWrapper";
import userEvent from "@testing-library/user-event";

jest.mock("api/index", () => {
	return {
		API_KEY: "test",
		API_KEY_U: "test",
		API_KEY_D: "test",
	};
});

describe("Featured component", () => {
    it("renders properly", () => {
        const { getByTestId, getByText, getByAltText, getAllByTestId, getAllByTitle } = _render(<Featured />)

		expect(getByTestId("featured-container")).toBeInTheDocument()
		expect(getByTestId("featured-section-left")).toBeInTheDocument()
		expect(getByText("Our recent updates")).toBeInTheDocument()
		expect(getByAltText("featured-picture")).toBeInTheDocument()
		expect(getByAltText("featured-picture")).toHaveAttribute("src", "https://res.cloudinary.com/maesan-product/image/upload/v1693229034/fx-factor/analyst-single_zduhnj.jpg")
		expect(getByTestId("featured-section-right")).toBeInTheDocument()
		expect(getByTestId("featured-section-accordion")).toBeInTheDocument()
		expect(getAllByTestId("minicard-component")).toHaveLength(3)
		expect(getAllByTestId("accordion-container")).toHaveLength(3)

		const expandIcon = getAllByTitle("expand-icon")
        const accordionDetails = getAllByTestId("accordion-details")
		const randomIndex = Math.floor(Math.random() * 3);

		expect(expandIcon).toHaveLength(3)
        expect(accordionDetails).toHaveLength(3)
        accordionDetails.map(detail => {
			expect(detail).not.toBeVisible()
		})

        act(() => {
            userEvent.click(expandIcon[randomIndex])
        })

        expect(accordionDetails[randomIndex]).toBeVisible()
    })
})