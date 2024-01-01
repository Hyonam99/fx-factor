import React from "react"
import { _render, waitFor, fireEvent, act } from "utils/routerWrapper";
import userEvent from "@testing-library/user-event";
import App from "App";

jest.mock("api/index", () => {
    return {
        API_KEY: 'test',
        API_KEY_U: 'test',
        API_KEY_D: 'test'
    };
})

describe("App test", () => {
    it("renders the App without crashing", () => {
        _render(<App />)
    })
})