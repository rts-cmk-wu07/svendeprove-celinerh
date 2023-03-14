import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout";
import Welcome from "./pages/Welcome";
import Activities from "./pages/Activities";
import Activity from "./pages/Activity";
import Search from "./pages/Search";
import Calendar from "./pages/Calendar";
import ClassSignups from "./pages/ClassSignups";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import TokenProvider from "./contexts/TokenProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Welcome /> },
      { path: "/aktiviteter", element: <Activities /> },
      { path: "/aktiviteter/:id", element: <Activity /> },
      { path: "/soeg", element: <Search /> },
      { path: "/kalender", element: <Calendar /> },
      { path: "/kalender/:id", element: <ClassSignups /> },
      { path: "/logind", element: <Login /> },
      { path: "/404", element: <NotFound /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TokenProvider>
      <RouterProvider router={router} />
    </TokenProvider>
  </React.StrictMode>
);
