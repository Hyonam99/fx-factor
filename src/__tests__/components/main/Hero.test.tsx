import React from "react"
import { Hero } from "components/components-exports";
import { _render } from "utils/routerWrapper";

jest.mock("api/index", () => {
    return {
        API_KEY: 'test',
        API_KEY_U: 'test',
        API_KEY_D: 'test'
    };
})

describe("Hero component", () => {
    it("renders the hero component", () => {
        const { getByText } = _render(<Hero />)
        expect(getByText("Unleash Your Forex Potential.")).toBeInTheDocument()
    })
})
