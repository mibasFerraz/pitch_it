import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import SignedInLayout from "../layouts/signedin-layout";
import About from "../pages/About/About";
import Generator from "../pages/Generator/Generator";

const signedInRouter = createBrowserRouter([
  {
    path: "/",
    element: <SignedInLayout />,
    children: [
      {
        index: true,
        element: <Generator />,
      },
      {
        index: "/about",
        element: <About />,
      },
      {
        index: "/generator",
        element: <Generator />,
      },
      {
        path: "/*",
        element: <h1>Not Found</h1>,
      },
    ],
  },
]);

export default signedInRouter;
