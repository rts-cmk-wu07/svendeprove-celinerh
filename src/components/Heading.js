import React from "react";

function Heading({ title, className = "" }) {
  return <h1 className={`text-large text-heading ${className}`}>{title}</h1>;
}

export default Heading;
