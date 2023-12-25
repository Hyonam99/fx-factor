import React from "react"
import { CourseDetail } from "components/components-exports";
import { _render } from "utils/routerWrapper";

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
    useParams: () => ({ courseId: '456' })
  }));

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

    it("renders all courses", () => {
        const { getByText, getByTestId } = _render(<CourseDetail />)

        expect(getByTestId("course-detail-container")).toBeInTheDocument()        
        expect(getByTestId("course-detail-wrapper")).toBeInTheDocument()        
        expect(getByText("INTERMEDIATE CLASS")).toBeInTheDocument()        
        expect(getByTestId("course-detail-banner")).toBeInTheDocument()        
        expect(getByTestId("course-detail-values-wrapper")).toBeInTheDocument()        
        expect(getByTestId("course-detail-outro")).toBeInTheDocument()        
        expect(getByText("Course content")).toBeInTheDocument()        
        expect(getByText("What you will gain")).toBeInTheDocument()

    })
})
