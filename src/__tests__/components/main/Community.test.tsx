import React from "react"
import { Community } from "components/components-exports";
import { _render } from "utils/routerWrapper";

jest.mock("api/index", () => {
    return {
        API_KEY: 'test',
        API_KEY_U: 'test',
        API_KEY_D: 'test'
    };
})

describe("Community Component", () => {
    it("renders the community component properly", () => {
        const { getByText, getByTestId, getByRole } = _render(<Community />)

        expect(getByTestId("community-container")).toBeInTheDocument()
        expect(getByTestId("community-container-wrapper")).toBeInTheDocument()
        expect(getByTestId("community-container-content")).toBeInTheDocument()
        expect(getByTestId("community-content-paragraph")).toBeInTheDocument()
        expect(getByText("Our Community")).toBeInTheDocument()
        expect(getByRole("link")).toHaveAttribute("href", "https://t.me/+oq9BDZt0rk4zMDJk")
        expect(getByRole("button", { name: "Join us Now" })).toBeInTheDocument()

    })
})
