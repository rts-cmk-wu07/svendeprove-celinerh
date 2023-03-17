import CalenderCard from "../features/calendar/components/CalenderCard";
import ErrorMessage from "../components/ErrorMessage";
import Heading from "../components/Heading";
import Navigation from "../components/Navigation";
import Spinner from "../components/Spinner";
import useActivities from "../features/activities/hooks/useActivities";
import useUser from "../hooks/useUser";
import { Link } from "react-router-dom";
import { useState } from "react";

function InstructorCalendar() {
  const { user } = useUser();
  const { activities, isLoading, error } = useActivities();
  const [show, setShow] = useState("instructor");

  const instructorActivities = activities?.filter(
    (activity) => activity?.instructorId === user?.id
  );

  return (
    <div className="page h-screen flex flex-col gap-6">
      <Heading title="Kalender" />
      {error && <ErrorMessage />}
      {isLoading && <Spinner centered />}
      <div className="flex border border-primaryText rounded-[10px] overflow-hidden">
        <button
          className={
            show === "instructor"
              ? "flex-1 text-small text-center p-4 text-heading border-primaryText"
              : "flex-1 text-small text-center p-4 bg-primaryText text-primaryBackground"
          }
          onClick={() => setShow("instructor")}
        >
          Instruktør
        </button>
        <button
          className={
            show === "default"
              ? "flex-1 text-small text-center p-4 text-heading border-primaryText"
              : "flex-1 text-small text-center p-4 bg-primaryText text-primaryBackground"
          }
          onClick={() => setShow("default")}
        >
          Deltager
        </button>
      </div>
      {show === "instructor" && instructorActivities?.length > 0 && (
        <div className="flex flex-col gap-4 overflow-y-scroll hide-scrollbar pb-20">
          {instructorActivities?.map((activity) => (
            <CalenderCard
              key={activity.id}
              to={`/kalender/aktiviteter/${activity?.id}`}
              title={activity?.name}
              weekday={activity?.weekday}
              time={activity?.time}
            />
          ))}
        </div>
      )}
      {show === "instructor" && instructorActivities?.length === 0 && (
        <div className="flex-1 grid grid-cols-1 grid-rows-1">
          <div className="w-full col-span-full row-span-full place-self-center flex flex-col items-center">
            <ErrorMessage message="Du er ikke instruktør for nogen aktiviteter i øjeblikket" />
          </div>
        </div>
      )}
      {show === "default" && user && user?.activities.length > 0 && (
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
      {show === "default" && user?.activities.length === 0 && (
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

export default InstructorCalendar;
