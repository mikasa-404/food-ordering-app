import {fireEvent, render, waitFor } from "@testing-library/react";
import Body from "../Body";
import store from "../../utils/store";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import { RES_DATA } from "../../mocks/RES_DATA";
import "@testing-library/jest-dom"


global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RES_DATA);
    },
  });
});

test("shimmer should load first", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

const shimmer= body.getByTestId("shimmer");
expect(shimmer).toBeInTheDocument();
});

test("restaurant should load on homepage", async () => {
    const body = render(
      <StaticRouter>
        <Provider store={store}>
          <Body />
        </Provider>
      </StaticRouter>
    );
        //wait for search to load
    await waitFor(()=>expect(body.getByTestId("searchbtn")));

    const resList = body.getByTestId("res-list") ;
    expect(resList.children.length).toBe(15);

  });

  test("search for string(food) on homepage", async () => {
    const body = render(
      <StaticRouter>
        <Provider store={store}>
          <Body />
        </Provider>
      </StaticRouter>
    );
        //wait for search to load
    await waitFor(()=>expect(body.getByTestId("searchbtn")));

    const input = body.getByTestId("search-input") ;
    fireEvent.change(input, {
        target: {
            value: "food",
        },
    })
    const search= body.getByTestId("searchbtn");
    fireEvent.click(search);
    const resList = body.getByTestId("res-list") ;
    expect(resList.children.length).toBe(1);

  });
