import React from "react"
import { Courses } from "components/components-exports";
import { _render } from "utils/routerWrapper";

jest.mock("api/index", () => {
    return {
        API_KEY: 'test',
        API_KEY_U: 'test',
        API_KEY_D: 'test',
        post: jest.fn()
    };
})
jest.mock("api/hooks/forexHook")

describe("Courses component", () => {


    it("renders all courses", () => {
        const { getByText, getByTitle, getByTestId } = _render(<Courses />)

        expect(getByText("Creatives Forex Certificate Program")).toBeInTheDocument()
        expect(getByText("Unlock your creative potential with our specialized Certificate Program for Forex Traders.")).toBeInTheDocument()
        expect(getByText("swipe to view more")).toBeInTheDocument()
        expect(getByTitle("swipe-left-arrow")).toBeInTheDocument()
        expect(getByTitle("swipe-right-arrow")).toBeInTheDocument()
        expect(getByTestId("course-card-wrapper")).toBeInTheDocument()

    })
})
