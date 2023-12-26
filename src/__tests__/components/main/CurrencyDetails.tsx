import React from "react"
import { CurrencyDetails } from "components/components-exports";
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
        const { getByText, getByTestId } = _render(<CurrencyDetails />)

        expect(getByTestId("currency-container")).toBeInTheDocument()
        expect(getByTestId("currency-price-chart")).toBeInTheDocument()
        expect(getByText("Technical Chart Analysis")).toBeInTheDocument()

        await waitFor(() => { expect(getByText("USDCAD")).toBeInTheDocument() })
    })
})
