import React from "react"
import { CourseCard } from "components/components-exports";
import { _render } from "utils/routerWrapper";
import { mockedCourseItem } from "mocked-data/mocked-data";

jest.mock("api/index", () => {
    return {
        API_KEY: 'test',
        API_KEY_U: 'test',
        API_KEY_D: 'test'
    };
})

describe("Course card component", () => {
    it("renders as expected", () => {

        const { getByAltText, getByRole, getByText } = _render(<CourseCard courseItem={mockedCourseItem}/>)

        expect(getByAltText("forex-course")).toBeInTheDocument()
        expect(getByRole("img")).toHaveAttribute("height", "140")
        expect(getByText(mockedCourseItem.courseIntro as string)).toBeInTheDocument()
        expect(getByText(mockedCourseItem.courseTitle)).toBeInTheDocument()
        expect(getByRole("link")).toHaveAttribute("href", `/courses/${mockedCourseItem.id as string}/?csn=${mockedCourseItem.courseTitle.toLowerCase()}`)
        expect(getByRole("button", { name: "Learn More" })).toBeInTheDocument()
    })
})
