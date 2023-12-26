import React from "react";
import { CustomButton } from "components/components-exports";
import { _render, act } from "utils/routerWrapper";
import userEvent from "@testing-library/user-event";

jest.mock("api/index", () => {
	return {
		API_KEY: "test",
		API_KEY_U: "test",
		API_KEY_D: "test",
	};
});

describe("Custom button", () => {
	it("renders properly", () => {
		const onclickMock = jest.fn();
		const { getByRole } = _render(
			<CustomButton title="custom-button" onClick={onclickMock} type="button" />
		);

		const buttonElement = getByRole("button", { name: "custom-button" });
		expect(buttonElement).toBeInTheDocument();
		expect(buttonElement).toHaveAttribute("type", "button");

		act(() => {
			userEvent.click(buttonElement);
		});

		expect(onclickMock).toHaveBeenCalled();
	});
});
