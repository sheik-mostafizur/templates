import {createBrowserRouter} from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Register from "../pages/Register";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path:"/register",
    element: <Register />,
  }
]);
export default Routes;
