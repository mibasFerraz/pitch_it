import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import SignedInLayout from "../layouts/signedin-layout";
import About from "../pages/About/About";

const signedInRouter = createBrowserRouter([
  {
    path: "/",
    element: <SignedInLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        index: "/about",
        element: <About />,
      },
      {
        path: "/*",
        element: <h1>Not Found</h1>,
      },
    ],
  },
]);

export default signedInRouter;
