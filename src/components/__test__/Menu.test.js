import { fireEvent, render, waitFor } from "@testing-library/react";
import store from "../../utils/store";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import { MENU_DATA } from "../../mocks/MENU_DATA";
import "@testing-library/jest-dom";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";



global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MENU_DATA);
    },
  });
});

test("Add to cart feature", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Header/>
        <RestaurantMenu />
      </Provider>
    </StaticRouter>
  );
  //await for menu to load
  await waitFor(() => expect(body.getByTestId("menu")));

  //all add to cart buttons in our menu
  const addBtn = body.getAllByTestId("addBtn");
  //you will click on first button
  fireEvent.click(addBtn[0]);
  fireEvent.click(addBtn[2]);



 
  const cart = body.getByTestId("cart");
  expect(cart.innerHTML).toBe("Cart-2");
});
