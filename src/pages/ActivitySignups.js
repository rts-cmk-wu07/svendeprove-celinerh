import ErrorMessage from "../components/ErrorMessage";
import Heading from "../components/Heading";
import Navigation from "../components/Navigation";
import Spinner from "../components/Spinner";
import useActivity from "../features/activities/hooks/useActivity";
import useRoster from "../features/calendar/hooks/useRoster";

function ActivitySignups() {
  const { activity } = useActivity();
  const { roster, isLoading, error } = useRoster();

  return (
    <div className="page h-screen flex flex-col gap-6">
      <Heading className="truncate" title={activity?.name} />
      {error && <ErrorMessage />}
      {isLoading && <Spinner />}
      {roster && roster.length > 0 && (
        <div className="flex flex-col gap-4 overflow-y-scroll hide-scrollbar pb-20">
          {roster?.map((participant, index) => (
            <p className="text-primaryText text-small" key={index}>
              {participant?.firstname} {participant?.lastname}
            </p>
          ))}
        </div>
      )}
      {roster?.length === 0 && (
        <div className="flex-1 grid grid-cols-1 grid-rows-1">
          <div className="w-full col-span-full row-span-full place-self-center flex flex-col items-center">
            <ErrorMessage message="Ingen tilmeldinger endnu" />
          </div>
        </div>
      )}
      <Navigation />
    </div>
  );
}

export default ActivitySignups;
