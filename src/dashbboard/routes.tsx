import { createBrowserRouter } from "react-router-dom";
import { LoginForm } from "./components/LoginForm";
import { RegisterPage } from "./pages/RegisterPage";
import Error404 from "./pages/Error404";
import DashboardHome from "./pages/dashboardPages/home";
import DashboardLayout from "./layout/dashboardLayout";
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
        element: <></>,
      },
    ],
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
    path: "*",
    element: <Error404 />,
  },
]);
