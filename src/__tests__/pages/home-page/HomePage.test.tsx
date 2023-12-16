import React from "react"
import { render } from "@testing-library/react";
import { HomePage } from "pages/page-exports";

describe("Landing page", () => {
    it("renders without crashing", () => {
        render(<HomePage />)
    })
})
