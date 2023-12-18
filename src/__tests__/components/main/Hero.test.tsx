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
    it("renders the hero component", async () => {
        const { getByText, getByRole } = _render(<Hero />)

        expect(getByText("Unleash Your Forex Potential.")).toBeInTheDocument()
        expect(getByText("Join our community & unlock profitable insights with The FX Factor.")).toBeInTheDocument()
        expect(getByRole("link")).toHaveAttribute("href", "/courses")
        expect(getByRole("button", { name: "Get A Course" })).toBeInTheDocument()
    })
})
