import ActivityCard from "../features/activities/components/ActivityCard";
import ErrorMessage from "../components/ErrorMessage";
import Heading from "../components/Heading";
import LogOut from "../components/LogOut";
import Navigation from "../components/Navigation";
import Spinner from "../components/Spinner";
import Swiper from "../components/Swiper";
import { useToken } from "../contexts/TokenProvider";
import useActivities from "../features/activities/hooks/useActivities";
import LogIn from "../components/LogIn";

function Activities() {
  const { activities, isLoading, error } = useActivities();
  const { token } = useToken();

  return (
    <div className="page h-screen flex flex-col gap-6">
      <Heading title="Aktiviteter" />
      {error && <ErrorMessage />}
      {isLoading && <Spinner centered />}
      {activities && (
        <Swiper>
          {activities?.map((activity) => (
            <ActivityCard
              key={activity.id}
              id={activity.id}
              imageSource={activity?.asset?.url}
              title={activity?.name}
              minAge={activity?.minAge}
              maxAge={activity?.maxAge}
            />
          ))}
        </Swiper>
      )}
      {token && <LogOut />}
      {!token && <LogIn />}
      <Navigation />
    </div>
  );
}

export default Activities;
