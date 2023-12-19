import React from "react"
import { _render } from "utils/routerWrapper";
import MiniCard from "components/builders/cards/mini-info/MiniCard";
import { mockedCardProps } from "mocked-data/mocked-data";

jest.mock("api/index", () => {
    return {
        API_KEY: 'test',
        API_KEY_U: 'test',
        API_KEY_D: 'test'
    };
})

describe("Mini card component", () => {
    it("renders with an Image avatar", () => {

        const { getByTestId, getByText } = _render(<MiniCard {...mockedCardProps} icon={undefined}/>)

        expect(getByText(mockedCardProps.cardTitle as string)).toBeInTheDocument()
        expect(getByText(mockedCardProps.cardDetails)).toBeInTheDocument()
        expect(getByTestId("card-avatar-with-image")).toBeInTheDocument();
    })

    it("renders with an Icon avatar", () => {

        const { getByTestId, getByText } = _render(<MiniCard {...mockedCardProps} imageUrl={undefined}/>)

        expect(getByText(mockedCardProps.cardTitle as string)).toBeInTheDocument()
        expect(getByText(mockedCardProps.cardDetails)).toBeInTheDocument()
        expect(getByTestId("card-avatar-with-icon")).toBeInTheDocument();
    })
})
