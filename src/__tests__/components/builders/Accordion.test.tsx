import React from "react"
import { CustomAccordion } from "components/components-exports";
import { _render, act } from "utils/routerWrapper";
import { faker } from "@faker-js/faker";
import userEvent from "@testing-library/user-event";

jest.mock("api/index", () => {
    return {
        API_KEY: 'test',
        API_KEY_U: 'test',
        API_KEY_D: 'test'
    };
})

describe("Custom Accordion component", () => {
    it("renders and functions properly", () => {

        const accordionProps = {
            title: faker.lorem.words(2),
            miniDetails: faker.lorem.words(4),
            mainContent: faker.lorem.words(12),
            itemIndex: 1
        }
        const { getByTestId, getByText, getByTitle } = _render(<CustomAccordion {...accordionProps}/>)

        expect(getByTestId("accordion-container")).toBeInTheDocument()
        expect(getByTestId("accordion-component")).toBeInTheDocument()
        expect(getByTestId("accordion-summary")).toBeInTheDocument()
        expect(getByText(accordionProps.title)).toBeInTheDocument()

        const expandIcon = getByTitle("expand-icon")
        const accordionDetails = getByTestId("accordion-details")
        
        expect(expandIcon).toBeInTheDocument()
        expect(accordionDetails).toBeInTheDocument()
        expect(accordionDetails).not.toBeVisible()

        act(() => {
            userEvent.click(expandIcon)
        })

        expect(accordionDetails).toBeVisible()
    })
})
