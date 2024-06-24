import { createBrowserRouter } from "react-router-dom";
import SignedOffLayout from "../layouts/signedoff-layout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Login from "../pages/Login/Login";

const signedOffRouter = createBrowserRouter([
  {
    path: "/",
    element: <SignedOffLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/*",
        element: <h1>Not Found</h1>,
      },
    ],
  },
]);

export default signedOffRouter;
