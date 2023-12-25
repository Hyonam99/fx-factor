import React from "react"
import { Courses } from "components/components-exports";
import { _render, waitFor } from "utils/routerWrapper";

jest.mock("api/index", () => {
    return {
        API_KEY: 'test',
        API_KEY_U: 'test',
        API_KEY_D: 'test',
        post: jest.fn()
    };
})

const useGetCourseContent: jest.Mock = require("api/hooks/forexHook").useGetCourseContent
jest.mock("api/hooks/forexHook", () => {
    return {
        useGetCourseContent: jest.fn()
    }
})

const expectedCourseJSON = `
{
    "body": {
        "courses": [
            {"id": "123", "courseTitle": "BEGINNERS CLASS"}, 
            {"id": "456", "courseTitle": "INTERMEDIATE CLASS"},
            {"id": "789", "courseTitle": "MASTER CLASS"}
        ]
    }
}
`

describe("Courses component", () => {

    beforeEach(() => (
        useGetCourseContent.mockImplementation(() => {
            return {
                call: jest.fn(),
                isLoading: false,
                data: { 
                    files: { 
                        contentBody: { 
                            content: expectedCourseJSON
                        } 
                    } 
                },
                error: false,
                isSuccess: true,
            };
        })
    ))

    it("renders all courses", async () => {
        const { getByText, getByTitle, getByTestId, getAllByRole, getAllByTestId } = _render(<Courses />)

        expect(getByText("Creatives Forex Certificate Program")).toBeInTheDocument()
        expect(getByText("Unlock your creative potential with our specialized Certificate Program for Forex Traders.")).toBeInTheDocument()
        expect(getByText("swipe to view more")).toBeInTheDocument()
        expect(getByTitle("swipe-left-arrow")).toBeInTheDocument()
        expect(getByTitle("swipe-right-arrow")).toBeInTheDocument()
        expect(getByTestId("course-card-wrapper")).toBeInTheDocument()
        await waitFor(() => expect(getAllByTestId("course-card-container")).toHaveLength(3))
        await waitFor(() => expect(getAllByTestId("course-card-title")).toHaveLength(3))
        await waitFor(() => expect(getAllByTestId("course-card-intro")).toHaveLength(3))
        await waitFor(() => expect(getAllByRole("img")).toHaveLength(3))
        await waitFor(() => expect(getAllByRole("button", { name: "Learn More"})).toHaveLength(3))
    })
})
