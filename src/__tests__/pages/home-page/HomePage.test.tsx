import React from "react"
import { _render, waitFor, act } from "utils/routerWrapper";
import { HomePage } from "pages/page-exports";
import userEvent from "@testing-library/user-event";

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


describe("Home page renders without crashing", () => {

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

    it("renders the hero component on the home page", () => {
        const { getByText, getByRole, getByTestId } = _render(<HomePage />)

        expect(getByText("Unleash Your Forex Potential.")).toBeInTheDocument()
        expect(getByText("Join our community & unlock profitable insights with The FX Factor.")).toBeInTheDocument()
        expect(getByTestId("hero-courses-link")).toHaveAttribute("href", "/courses")
        expect(getByRole("button", { name: "Get A Course" })).toBeInTheDocument()
    })

    it("renders the market pricing component widget on the home page", async () => {
        const { getByText, getByTestId } = _render(<HomePage />)

        const linkElement = getByTestId("technical-chart-link")
        expect(getByTestId("market-price-container")).toBeInTheDocument()
        expect(getByTestId("market-price-header")).toBeInTheDocument()
        expect(getByTestId("chart-link-container")).toBeInTheDocument()
        expect(getByTestId("forex-rates-container")).toBeInTheDocument()
        expect(linkElement).toHaveAttribute("href", "/currency-details")
        expect(linkElement).toHaveTextContent("View technical chart")

        await waitFor(() => { expect(getByText("USD")).toBeInTheDocument() })
    })

    it("renders all courses on the home page", async () => {
        const { getByText, getByTitle, getByTestId, getAllByRole, getAllByTestId } = _render(<HomePage />)

        expect(getByText("Creatives Forex Certificate Program")).toBeInTheDocument()
        expect(getByText("Unlock your creative potential with our specialized Certificate Program for Forex Traders.")).toBeInTheDocument()
        expect(getByText("swipe to view more")).toBeInTheDocument()
        expect(getByTitle("swipe-left-arrow")).toBeInTheDocument()
        expect(getByTitle("swipe-right-arrow")).toBeInTheDocument()
        expect(getByTestId("course-card-wrapper")).toBeInTheDocument()
        await waitFor(() => expect(getAllByTestId("course-card-container")).toHaveLength(3))
        await waitFor(() => expect(getAllByTestId("course-card-title")).toHaveLength(3))
        await waitFor(() => expect(getAllByTestId("course-card-intro")).toHaveLength(3))
        await waitFor(() => expect(getAllByTestId("course-card-image")).toHaveLength(3))
        await waitFor(() => expect(getAllByRole("button", { name: "Learn More"})).toHaveLength(3))
    })

    it("renders the currency ticker on the home page", () => {
		const { getByTestId } = _render(<HomePage />);
        expect(getByTestId("marquee-container")).toBeInTheDocument()
	});

    it("renders the featured component on the home page", () => {
        const { getByTestId, getByText, getByAltText, getAllByTestId, getAllByTitle } = _render(<HomePage />)

		expect(getByTestId("featured-container")).toBeInTheDocument()
		expect(getByTestId("featured-section-left")).toBeInTheDocument()
		expect(getByText("Our recent updates")).toBeInTheDocument()
		expect(getByAltText("featured-picture")).toBeInTheDocument()
		expect(getByAltText("featured-picture")).toHaveAttribute("src", "https://res.cloudinary.com/maesan-product/image/upload/v1693229034/fx-factor/analyst-single_zduhnj.jpg")
		expect(getByTestId("featured-section-right")).toBeInTheDocument()
		expect(getByTestId("featured-section-accordion")).toBeInTheDocument()
		expect(getAllByTestId("minicard-component")).toHaveLength(3)
		expect(getAllByTestId("accordion-container")).toHaveLength(3)

		const expandIcon = getAllByTitle("expand-icon")
        const accordionDetails = getAllByTestId("accordion-details")
		const randIndex = Math.floor(Math.random() * 2) + 1;

		expect(expandIcon).toHaveLength(3)
        expect(accordionDetails).toHaveLength(3)
        accordionDetails.map(detail => {
			expect(detail).not.toBeVisible()
		})

        act(() => {
            userEvent.click(expandIcon[randIndex])
        })

        expect(accordionDetails[randIndex]).toBeVisible()
    })

    it("renders the community component on the home page", () => {
        const { getByText, getByTestId, getByRole } = _render(<HomePage />)

        expect(getByTestId("community-container")).toBeInTheDocument()
        expect(getByTestId("community-container-wrapper")).toBeInTheDocument()
        expect(getByTestId("community-container-content")).toBeInTheDocument()
        expect(getByTestId("community-content-paragraph")).toBeInTheDocument()
        expect(getByText("Our Community")).toBeInTheDocument()
        expect(getByTestId("join-community-link")).toHaveAttribute("href", "https://t.me/+oq9BDZt0rk4zMDJk")
        expect(getByRole("button", { name: "Join us Now" })).toBeInTheDocument()

    })
})
