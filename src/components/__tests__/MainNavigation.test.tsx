import * as hooks from "react-redux";
import { createMemoryHistory } from "history";
// import { render } from "../../utils/test-utils";
import MainNavigation from "../MainNavigation";
import React from "react";
import {
  fireEvent,
  queryByText,
  waitForElement,
  screen,
} from "@testing-library/dom";
import { render } from "@testing-library/react";
import { Router, BrowserRouter, MemoryRouter } from "react-router-dom";

describe("MainNavigation", () => {
  const history = createMemoryHistory();
  const routeComponentPropsMock = {
    history: history,
    location: { pathname: "/ingredients" } as any,
    match: {} as any,
  };
  const dispathMock = jest.fn();
  jest.spyOn(hooks, "useSelector").mockImplementation(() => false);
  jest.spyOn(hooks, "useDispatch").mockImplementation(() => dispathMock);

  it('shows "The Salad Store"', () => {
    const { container } = render(
      <BrowserRouter>
        <MainNavigation {...routeComponentPropsMock} />
      </BrowserRouter>
    );
    const header = queryByText(container, "The Salad Store");
    expect(header).toBeInTheDocument();
  });

  xit('shows button when pathname is "ingredients"', async () => {
    jest.spyOn(hooks, "useSelector").mockImplementation(() => true);
    const instance = render(
      <MemoryRouter>
        <MainNavigation {...routeComponentPropsMock} />
      </MemoryRouter>
    );
    // instance.rerender(
    //   <BrowserRouter>
    //     <MainNavigation {...routeComponentPropsMock} />
    //   </BrowserRouter>
    // );
    const cartBtn = screen.queryByText(/Proceed to checkout/i);
    expect(cartBtn).toBeInTheDocument();
  });
});

export {};
