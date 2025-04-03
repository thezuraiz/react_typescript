import { createBrowserRouter } from "react-router-dom";
import { LoginForm } from "./components/LoginForm";
import { RegisterPage } from "./pages/RegisterPage";
import Error404 from "./pages/Error404";
export const router = createBrowserRouter([
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
