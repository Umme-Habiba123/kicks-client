import {
  createBrowserRouter,
} from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ProductDetails from "../pages/ProductDetails/ProductDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        index:true,
        Component: Home
      },
      {
        path: '/product/:id',
        Component: ProductDetails
      },
      {
        path: '/product/all',
        Component:ProductDetails
      },
    ]
  },
]);