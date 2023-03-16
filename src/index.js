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
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import TokenProvider from "./contexts/TokenProvider";
import ProtectedRoute from "./components/ProtectedRoute";
import ActivitySignups from "./pages/ActivitySignups";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Welcome /> },
      { path: "/aktiviteter", element: <Activities /> },
      { path: "/aktiviteter/:id", element: <Activity /> },
      { path: "/soeg", element: <Search /> },
      {
        path: "/kalender",
        element: (
          <ProtectedRoute>
            <Calendar />
          </ProtectedRoute>
        ),
      },
      {
        path: "/kalender/aktiviteter/:id",
        element: (
          <ProtectedRoute>
            <ActivitySignups />
          </ProtectedRoute>
        ),
      },
      { path: "/login", element: <Login /> },
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
