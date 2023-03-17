import CalenderCard from "../features/calendar/components/CalenderCard";
import ErrorMessage from "../components/ErrorMessage";
import Heading from "../components/Heading";
import Navigation from "../components/Navigation";
import Spinner from "../components/Spinner";
import useActivities from "../features/activities/hooks/useActivities";
import useUser from "../hooks/useUser";

function InstructorCalendar() {
  const { user } = useUser();
  const { activities, isLoading, error } = useActivities();

  const instructorActivities = activities?.filter(
    (activity) => activity?.instructorId === user?.id
  );

  return (
    <div className="page h-screen flex flex-col gap-6">
      <Heading title="Kalender" />
      {error && <ErrorMessage />}
      {isLoading && <Spinner />}
      {activities && instructorActivities?.length > 0 && (
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
      {instructorActivities?.length === 0 && (
        <div className="flex-1 grid grid-cols-1 grid-rows-1">
          <div className="w-full col-span-full row-span-full place-self-center flex flex-col items-center">
            <ErrorMessage message="Du er ikke instruktør for nogen aktiviteter i øjeblikket" />
          </div>
        </div>
      )}
      <Navigation />
    </div>
  );
}

export default InstructorCalendar;
