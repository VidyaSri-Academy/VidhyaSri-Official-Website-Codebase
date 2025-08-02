import App from "../App";
import NotFoundPage from "./404";

import { createBrowserRouter } from "react-router-dom";
import About from "@/components/Aboutus";
import HomeLayout from "@/components/HomeLayout";
import Directors from "@/components/Directors";
import Meetmentors from "@/components/Meetmentors";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <HomeLayout />,
      },
      {
        path: "/aboutus",
        element: <About />,
      },
      {
        path: "/learn-more",
        element: <Directors />,
      },
      {
        path: "/learn-more/:id",
        element: <Meetmentors />,
      }
    ],
  },
]);

export default router;
