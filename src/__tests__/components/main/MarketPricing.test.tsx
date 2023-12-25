import React from "react"
import { MarketPricing } from "components/components-exports";
import { _render, waitFor } from "utils/routerWrapper";

jest.mock("api/index", () => {
    return {
        API_KEY: 'test',
        API_KEY_U: 'test',
        API_KEY_D: 'test'
    };
})


describe("Market pricing component", () => {
    it("renders the market pricing component with the widget", async () => {
        const { getByText, getByRole, getByTestId } = _render(<MarketPricing />)

        const linkElement = getByRole("link")
        expect(getByTestId("market-price-container")).toBeInTheDocument()
        expect(getByTestId("market-price-header")).toBeInTheDocument()
        expect(getByTestId("chart-link-container")).toBeInTheDocument()
        expect(getByTestId("forex-rates-container")).toBeInTheDocument()
        expect(linkElement).toHaveAttribute("href", "/currency-details")
        expect(linkElement).toHaveTextContent("View technical chart")

        await waitFor(() => { expect(getByText("USD")).toBeInTheDocument() })
    })
})
