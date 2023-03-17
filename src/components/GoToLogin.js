import { Link } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";
import Heading from "./Heading";
import Navigation from "./Navigation";

function GoToLogin() {
  return (
    <div className="page h-screen flex flex-col">
      <Heading title="Kalender" />
      <div className="flex-1 grid grid-cols-1 grid-rows-1">
        <div className="w-full col-span-full row-span-full place-self-center flex flex-col items-center">
          <ErrorMessage message="Du skal være logget ind for at se kalenderen" />
          <Link className="button border border-buttonText mt-6" to="/login">
            Gå til login
          </Link>
        </div>
      </div>
      <Navigation />
    </div>
  );
}

export default GoToLogin;
