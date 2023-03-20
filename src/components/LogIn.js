import { MdLogin } from "react-icons/md";
import { Link } from "react-router-dom";

function LogIn() {
  return (
    <Link
      className="absolute top-8 right-6 navLink border-buttonText text-primaryText z-30"
      to="/login"
    >
      <MdLogin />
    </Link>
  );
}

export default LogIn;
