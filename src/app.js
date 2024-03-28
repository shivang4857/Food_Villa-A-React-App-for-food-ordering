import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";
import { IMG_CDN_URL } from "./config";
import { restaurantList } from "./config";
import { useState } from "react";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Contact from "./Components/contact";
import About from "./components/about";
import RestaurantMenu from "./components/restaurantMenu";
import Error from "./components/error";
import Login from "./components/login";
import { Provider } from "react-redux";
import store from "../utils/store";
import Cart from "./components/cart";

const AppLayout = () => {
    return(
      <Provider store = {store}>
        <React.Fragment>
    <Header/>
    <Outlet />
    <Footer/>
    </React.Fragment>
    </Provider>
    )

}

const appRouter = createBrowserRouter([
    {
      path: "/", // show path for routing
      element: <AppLayout />, // show component for particular path
      errorElement: <Error />, // show error component for path is different
      children: [
        // show children component for routing
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/restaurant/:resId",
          element: <RestaurantMenu />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/cart",
          element: <Cart/>,
        },
       
        
      ],
    },
    
  ]);
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<RouterProvider router={appRouter} />);
  /* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/
