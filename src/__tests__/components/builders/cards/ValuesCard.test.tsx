import React from "react"
import { ValuesCard } from "components/components-exports";
import { _render } from "utils/routerWrapper";
import { mockedCardProps } from "mocked-data/mocked-data";

jest.mock("api/index", () => {
    return {
        API_KEY: 'test',
        API_KEY_U: 'test',
        API_KEY_D: 'test'
    };
})

describe("Values card component", () => {
    it("renders as expected", () => {

        const { getByAltText, getByRole, getByText } = _render(<ValuesCard {...mockedCardProps}/>)

        expect(getByAltText("our-mission-value")).toBeInTheDocument()
        expect(getByRole("img")).toHaveAttribute("height", "160")
        expect(getByText(mockedCardProps.cardTitle as string)).toBeInTheDocument()
        expect(getByText(mockedCardProps.cardDetails)).toBeInTheDocument()
    })
})
