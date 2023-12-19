import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "../../__mocks__/intersection"

const _render = (ui: any, { ...renderOptions } = {}) => {
    const Wrapper = ({ children }: any) => (
        <MemoryRouter>{children}</MemoryRouter>
    );

    return render(ui, { wrapper: Wrapper, ...renderOptions });
};

export * from "@testing-library/react";
export { _render };
