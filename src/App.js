// import "../index.css"
import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./components/Shimmer";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";
import OrderPlaced from "./components/Orderplaced";

const Help = lazy(() => import("./components/Help"));

const AppLayout = () => {
  // const [user, setUser] = useState({
  //   name: "Priya",
  //   email: "jhapriya106@gmail.com",
  // });
  

  return (
      <Provider store={store}>
        <Header />
        <Suspense fallback={<Shimmer />}>
        <Outlet />
        </Suspense>

    </Provider>
    
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About name="Priya"/>,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/help",
        element: (
            <Help />
        ),
      },
      {
        path: "/cart",
        element: <Cart/>,
      },
      {
        path: "/order",
        element: <OrderPlaced/>,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
