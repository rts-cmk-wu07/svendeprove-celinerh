import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <h1>404</h1>
      <p>Whoops, page not found.</p>
      <Link className="block px-4 py-2 border w-fit" to="/">
        Return home
      </Link>
    </>
  );
}

export default NotFound;
