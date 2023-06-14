import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Classes from "../pages/Classes";
import Login from "../pages/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        }, {
            path: '/classes',
            element:<Classes></Classes>
        }, {
            path: '/login',
            element:<Login></Login>
      }
    ],
  },
]);
