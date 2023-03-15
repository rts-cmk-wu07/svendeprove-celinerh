import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function Layout() {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default Layout;
