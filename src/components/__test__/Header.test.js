import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";

test("Logo should load on rendering head", () => {
  //load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  console.log(header);
  //check if logo is loaded
  const logo= header.getAllByTestId("logo");
  expect(logo[0].src).toBe("http://localhost/dummy.png");

});
test("cart items should be 0", () => {
    //load header
    const header = render(
      <StaticRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </StaticRouter>
    );
    //check if logo is loaded
    const cart= header.getByTestId("cart");
    expect(cart.innerHTML).toBe("Cart-0");
  
  });