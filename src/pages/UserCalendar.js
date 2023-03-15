import { Link } from "react-router-dom";
import CalenderCard from "../components/CalenderCard";
import ErrorMessage from "../components/ErrorMessage";
import Heading from "../components/Heading";
import Navigation from "../components/Navigation";
import Spinner from "../components/Spinner";
import useUser from "../hooks/useUser";

function UserCalendar() {
  const { user, isLoading, error } = useUser();

  return (
    <div className="page h-screen flex flex-col gap-6">
      <Heading title="Kalender" />
      {error && <ErrorMessage />}
      {isLoading && <Spinner />}
      {user && (
        <div className="flex flex-col gap-4 overflow-y-scroll hide-scrollbar pb-20">
          {user?.activities.map((activity) => (
            <CalenderCard
              key={activity.id}
              to={`/aktiviteter/${activity?.id}`}
              title={activity?.name}
              weekday={activity?.weekday}
              time={activity?.time}
            />
          ))}
        </div>
      )}
      {user?.activities.length === 0 && (
        <div className="flex-1 grid grid-cols-1 grid-rows-1">
          <div className="w-full col-span-full row-span-full place-self-center flex flex-col items-center">
            <ErrorMessage message="Du har ingen aktiviteter" />
            <Link
              className="button border border-buttonText mt-6"
              to="/aktiviteter"
            >
              Find aktiviteter
            </Link>
          </div>
        </div>
      )}
      <Navigation />
    </div>
  );
}

export default UserCalendar;
