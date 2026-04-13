import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import BookDetails from "../pages/BookDetails";
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
      {
        path: "/bookDetails/:id",
        Component: BookDetails,
        loader: () => fetch("/booksData.json").then((res) => res.json()),
      },
    ],
  },
]);

export default router;
