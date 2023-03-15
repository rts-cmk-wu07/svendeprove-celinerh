import { toast } from "react-toastify";
import ErrorMessage from "../components/ErrorMessage";
import Navigation from "../components/Navigation";
import Spinner from "../components/Spinner";
import { useToken } from "../contexts/TokenProvider";
import handleActivityLeave from "../functions/handleActivityLeave";
import handleActivitySignUp from "../functions/handleActivitySignUp";
import useActivity from "../hooks/useActivity";
import useIsSignedUp from "../hooks/useIsSignedUp";
import useUser from "../hooks/useUser";

function Activity() {
  const { activity, isLoading, error } = useActivity();
  const { token } = useToken();
  const { user, mutateUser } = useUser();
  const { isSignedUp } = useIsSignedUp(user, activity);

  return (
    <div className="flex flex-col min-h-screen pb-20 bg-primaryBackground">
      {error && <ErrorMessage />}
      {isLoading && <Spinner />}
      {activity && (
        <>
          <div className="h-[60vh] relative">
            <img
              className="w-full h-full object-cover"
              src={activity?.asset.url}
              alt={activity?.name}
              title={activity?.name}
            />
            {token && !isSignedUp && (
              <button
                className="button absolute bottom-6 right-6"
                onClick={() =>
                  handleActivitySignUp(token.token, token.userId, activity?.id)
                    .then(() => mutateUser())
                    .catch(() =>
                      toast.error(
                        "Kunne ikke tilmelde dig aktiviteten. Prøv igen senere."
                      )
                    )
                }
              >
                Tilmeld
              </button>
            )}
            {token && isSignedUp && (
              <button
                className="button absolute bottom-6 right-6"
                onClick={() =>
                  handleActivityLeave(token.token, token.userId, activity?.id)
                    .then(() => mutateUser())
                    .catch(() =>
                      toast.error(
                        "Kunne ikke forlade aktiviteten. Prøv igen senere."
                      )
                    )
                }
              >
                Forlad
              </button>
            )}
          </div>

          <div className="text-primaryText text-small p-6 flex-1">
            <h1 className="text-medium">{activity?.name}</h1>
            <p>
              <span className="capitalize">{activity?.weekday}</span> kl.{" "}
              {activity?.time}
            </p>
            <p className="mt-1">
              Fra {activity?.minAge}-{activity?.maxAge} år
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
