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
    path: "*",
    element: <div>404</div>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div style={{ maxWidth: "1190px", margin: "auto" }}>
      <CategoriesContextProvider>
        <Header />
        <Hero />
        <RouterProvider router={router} />
      </CategoriesContextProvider>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
