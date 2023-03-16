import { Link } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import Heading from "../components/Heading";

function NotFound() {
  return (
    <div className="page h-screen flex flex-col">
      <Heading title="404" />
      <div className="flex-1 grid grid-cols-1 grid-rows-1">
        <div className="w-full col-span-full row-span-full place-self-center flex flex-col items-center">
          <ErrorMessage message="Uuups, siden blev ikke fundet." />
          <Link className="button border border-buttonText mt-6" to="/">
            Gå til forsiden
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
