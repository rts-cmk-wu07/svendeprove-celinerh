import React from "react";
import { Link } from "react-router-dom";
import Heading from "../components/Heading";

function NotFound() {
  return (
    <div className="page">
      <Heading title="404" />
      <p className="text-primaryText my-10">Whoops, page not found.</p>
      <Link
        className="block px-4 py-2 border border-buttonText w-fit text-buttonText rounded-[10px]"
        to="/"
      >
        Return home
      </Link>
    </div>
  );
}

export default NotFound;
