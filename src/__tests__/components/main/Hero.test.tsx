import React from "react"
import { render } from "@testing-library/react";
import { Hero } from "components/components-exports";

describe("Hero component", () => {
    it("renders the hero component", () => {
        const { getByText } = render(<Hero />)
        expect(getByText("Unleash Your Forex Potential.")).toBeInTheDocument()
    })
})
