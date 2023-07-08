import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./components/Shimmer";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";
import billingContext from "./utils/billingContext";

const Help = lazy(() => import("./components/Help"));

const AppLayout = () => {
  // const [user, setUser] = useState({
  //   name: "Priya",
  //   email: "jhapriya106@gmail.com",
  // });
  const [bill, setBill]= useState(
    {
      totalBill: 0,
    }
  );

  return (
    <Provider store={store}>
      <billingContext.Provider value={{ bill: bill, setBill: setBill }}>
        <Header />
        <Suspense fallback={<Shimmer />}>
        <Outlet />
        </Suspense>

      </billingContext.Provider>
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
        element: 
        
        <Body />,
      },
      {
        path: "/about",
        element: <About name="Priya"/>,
      },
      {
        path: "/contact",
        element: <Contact />,
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
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
