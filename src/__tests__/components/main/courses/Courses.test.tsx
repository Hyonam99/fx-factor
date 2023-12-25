import React from "react"
import { Courses } from "components/components-exports";
import { _render } from "utils/routerWrapper";

jest.mock("api/index", () => {
    return {
        API_KEY: 'test',
        API_KEY_U: 'test',
        API_KEY_D: 'test'
    };
})

describe("Courses component", () => {
    it("renders all courses", () => {
        const { getByText, getByRole } = _render(<Courses />)

        expect(getByText("Unleash Your Forex Potential.")).toBeInTheDocument()
        expect(getByText("Join our community & unlock profitable insights with The FX Factor.")).toBeInTheDocument()
        expect(getByRole("link")).toHaveAttribute("href", "/courses")
        expect(getByRole("button", { name: "Get A Course" })).toBeInTheDocument()
    })
})
