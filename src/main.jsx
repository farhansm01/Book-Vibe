import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router";
import BooksProvider from "./context/BookContext.jsx";
import "./index.css";
import router from "./router/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BooksProvider>
      <RouterProvider router={router} />
      <Toaster position="top-right" />
    </BooksProvider>
  </StrictMode>,
);
