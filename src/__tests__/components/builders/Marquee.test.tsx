import React from "react";
import { Marquee } from "components/components-exports";
import { _render } from "utils/routerWrapper";

jest.mock("api/index", () => {
	return {
		API_KEY: "test",
		API_KEY_U: "test",
		API_KEY_D: "test",
	};
});

describe("Marquee component", () => {
	it("renders properly", () => {
		const { getByTestId } = _render(<Marquee />);
        expect(getByTestId("marquee-container")).toBeInTheDocument()
	});
});
