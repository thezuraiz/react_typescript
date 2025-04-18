import { createBrowserRouter } from "react-router-dom";
import { LoginForm } from "./components/LoginForm";
import { RegisterPage } from "./pages/RegisterPage";
import Error404 from "./pages/Error404";
import DashboardHome from "./pages/dashboardPages/home";
import DashboardLayout from "./layout/dashboardLayout";
import BooksPage from "./pages/dashboardPages/books";

import DemoPage from "./pages/table/page";
import EcomLayout from "@/app/ecom-task/home-page";
import ProductPage from "@/app/ecom-task/product-page";
import ProductsPage from "@/app/ecom-task/Products-page";
import GarjPage from "./pages/garaj-task/garj-page";

export const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "home",
        element: <DashboardHome />,
      },
      {
        path: "books",
        element: <BooksPage />,
      },
    ],
  },
  {
    path: "/garj",
    element: <GarjPage />,
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/mytable",
    element: <DemoPage />,
  },
  {
    path: "/",
    element: <EcomLayout />,
    children: [
      {
        index: true,
        element: <ProductsPage />,
      },
      {
        path: "product/:id",
        element: <ProductPage />,
      },
    ],
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);
