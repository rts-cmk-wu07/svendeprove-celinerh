import ErrorMessage from "../components/ErrorMessage";
import Navigation from "../components/Navigation";
import Spinner from "../components/Spinner";
import { useToken } from "../contexts/TokenProvider";
import useActivity from "../hooks/useActivity";

function Activity() {
  const { activity, isLoading, error } = useActivity();
  const { token } = useToken();

  return (
    <div className="h-screen flex flex-col">
      {error && <ErrorMessage />}
      {isLoading && <Spinner />}
      {activity && (
        <>
          <div className="h-3/5 relative">
            <img
              className="w-full h-full object-cover"
              src={activity?.asset.url}
              alt={activity?.name}
              title={activity?.name}
            />
            {token && (
              <button className="button absolute bottom-6 right-6">
                Tilmeld
              </button>
            )}
          </div>

          <div className="bg-primaryBackground text-primaryText text-small p-6 pb-[66px] flex-1">
            <h1 className="text-medium">{activity?.name}</h1>
            <p className="mt-1">
              {activity?.minAge}-{activity?.maxAge} år
            </p>
            <p className="mt-3">{activity?.description}</p>
          </div>
        </>
      )}

      <Navigation />
    </div>
  );
}

export default Activity;
