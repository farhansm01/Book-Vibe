import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Books from "../pages/Books";
import Homepage from "../pages/Homepage";
import Page from "../pages/Page";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, path: "/", Component: Homepage },
      { path: "/books", Component: Books },
      { path: "/page", Component: Page },
    ],
  },
]);

export default router;
