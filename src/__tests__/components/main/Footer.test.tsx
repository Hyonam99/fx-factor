import React from "react"
import { Footer } from "components/components-exports";
import { _render, waitFor, fireEvent, act } from "utils/routerWrapper";
import userEvent from "@testing-library/user-event";

jest.mock("api/index", () => {
    return {
        API_KEY: 'test',
        API_KEY_U: 'test',
        API_KEY_D: 'test'
    };
})

describe("Footer Component", () => {
    it("renders the footer component", () => {
        const { getByText, getByTestId, getByRole, getByTitle } = _render(<Footer />)

        expect(getByTestId("footer-container")).toBeInTheDocument()
        expect(getByText("Stay Informed !")).toBeInTheDocument()
        expect(getByTestId("footer-subscription-paragraph")).toBeInTheDocument()
        expect(getByTestId("footer-form")).toBeInTheDocument()
        expect(getByRole("form")).toBeInTheDocument()
        expect(getByTestId("subscribe-input")).toBeInTheDocument()
        expect(getByRole("button", { name: "Subscribe" })).toBeInTheDocument()
        expect(getByTestId("footer-signature")).toBeInTheDocument()
        expect(getByText("78, Egbe Road, Iyana-Ejigbo, Lagos")).toBeInTheDocument()
        expect(getByText("copy right 2023 fx factor")).toBeInTheDocument()
        expect(getByTestId("footer-quick-action")).toBeInTheDocument()

        expect(getByTitle("location-icon")).toBeInTheDocument()
        expect(getByTitle("twitter-icon")).toBeInTheDocument()
        expect(getByTitle("instagram-icon")).toBeInTheDocument()
        expect(getByTitle("telegram-icon")).toBeInTheDocument()
        expect(getByTitle("facebook-icon")).toBeInTheDocument()

    })

    it("functions properly", async () => {
        const { getByText, getByRole, getByLabelText } = _render(<Footer />)

        const subscribeButton = getByRole("button", { name: "Subscribe" })

        act(() => {
            userEvent.click(subscribeButton)
        })

        await waitFor(() => expect(getByText("email address is required")).toBeInTheDocument())

        const inputField = getByLabelText("Email Address")

        act(() => {
            fireEvent.change(inputField, { target: { value: 123456 } })
        })
        act(() => {
            userEvent.click(subscribeButton)
        })

        await waitFor(() => expect(getByText("invalid email format")).toBeInTheDocument())

        act(() => {
            fireEvent.change(inputField, { target: { value: "randomperson@email.com" } })
        })
        act(() => {
            userEvent.click(subscribeButton)
        })

    })
})
