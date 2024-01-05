import React from "react"
import { _render } from "utils/routerWrapper";
import { AboutPage } from "pages/page-exports";

jest.mock("api/index", () => {
    return {
        API_KEY: 'test',
        API_KEY_U: 'test',
        API_KEY_D: 'test'
    };
})

describe("About Page", () => {
    it("renders the about page without crashing", () => {
        const { getByTestId, getAllByTestId, getByText } = _render(<AboutPage />)

        const aboutPageTitles = ["Our Story", "Our Mission", "What Sets Us Apart", "Our Goal"]
        const valuesCard = getAllByTestId("values-card")
        const cardImage = getAllByTestId("values-card-image")
        const cardTitle = getAllByTestId("values-card-image")
        const cardDetails = getAllByTestId("values-card-image")

        expect(getByTestId("about-container")).toBeInTheDocument()
        expect(getByText("The Fx Factor: A key, a family.")).toBeInTheDocument()
        expect(getByText("We grow together, learn together and profit together.")).toBeInTheDocument()
        expect(valuesCard).toHaveLength(4)
        
        valuesCard.map((card, i) => {
            expect(card).toBeInTheDocument();
            expect(card).toHaveTextContent(aboutPageTitles[i]);
            expect(cardImage[i]).toBeInTheDocument()
            expect(cardTitle[i]).toBeInTheDocument()
            expect(cardDetails[i]).toBeInTheDocument()
        })
    })
})
