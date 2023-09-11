import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./views/Home";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./layouts/Header";
import Hero from "./layouts/Hero";
import { CategoriesContextProvider } from "./contexts/categories";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/hola",
    element: <h1>Hola</h1>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CategoriesContextProvider>
      <Header />
      <Hero />
      <RouterProvider router={router} />
    </CategoriesContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
