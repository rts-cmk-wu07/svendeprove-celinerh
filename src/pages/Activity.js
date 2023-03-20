import { toast } from "react-toastify";
import ErrorMessage from "../components/ErrorMessage";
import Navigation from "../components/Navigation";
import Spinner from "../components/Spinner";
import { useToken } from "../contexts/TokenProvider";
import handleActivityLeave from "../features/activities/handleActivityLeave";
import handleActivitySignUp from "../features/activities/handleActivitySignUp";
import inRange from "../utils/inRange";
import useActivity from "../features/activities/hooks/useActivity";
import useHasActivityThisWeekday from "../features/activities/hooks/useHasActivityThisWeekday";
import useIsSignedUp from "../features/activities/hooks/useIsSignedUp";
import useUser from "../hooks/useUser";
import useIsInstructorThisWeekday from "../features/activities/hooks/useIsInstructorThisWeekday";
import { useState } from "react";
import Modal from "../components/Modal";
import { apiUrl } from "../utils/apiUrl";

function Activity() {
  const { activity, isLoading, error } = useActivity();
  const { token } = useToken();
  const { user, mutateUser } = useUser();
  const { isSignedUp } = useIsSignedUp(user, activity);
  const { hasActivityThisWeekday } = useHasActivityThisWeekday(user, activity);
  const withinAgeRestriction = inRange(
    user?.age,
    activity?.minAge,
    activity?.maxAge
  );
  const { isInstructorThisWeekday } = useIsInstructorThisWeekday(
    token?.role,
    user,
    activity?.weekday
  );
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex flex-col min-h-screen pb-20 bg-primaryBackground">
      {error && <ErrorMessage />}
      {isLoading && <Spinner />}
      {activity && (
        <>
          <div className="h-[60vh] relative">
            <img
              className="w-full h-full object-cover"
              src={`${apiUrl}${activity?.asset.url}`}
              alt={activity?.name}
              title={activity?.name}
            />
            {token && !isSignedUp && (
              <button
                className="button absolute bottom-6 right-6"
                onClick={() => {
                  if (activity?.instructorId === token.userId) {
                    toast.error("Du kan ikke tilmelde dig din egen aktivitet.");
                    return;
                  }

                  if (isInstructorThisWeekday) {
                    toast.error(
                      "Du kan ikke tilmelde dig aktiviteter samme dag som du er instruktør."
                    );
                    return;
                  }

                  if (!withinAgeRestriction) {
                    toast.error(
                      "Du er ikke indenfor aldersgrænsen til denne aktivitet."
                    );
                    return;
                  }

                  if (hasActivityThisWeekday) {
                    toast.error(
                      "Du kan ikke tilmelde dig flere aktiviteter på samme dag."
                    );
                    return;
                  }

                  handleActivitySignUp(token.token, token.userId, activity?.id)
                    .then(() => {
                      toast.success("Du er nu tilmeldt aktiviteten.");

                      mutateUser();
                    })
                    .catch(() =>
                      toast.error(
                        "Kunne ikke tilmelde dig aktiviteten. Prøv igen senere."
                      )
                    );
                }}
              >
                Tilmeld
              </button>
            )}
            {token && isSignedUp && (
              <button
                className="button absolute bottom-6 right-6"
                onClick={() => setShowModal(true)}
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
      {showModal && (
        <Modal
          message="Er du sikker på at du vil forlade aktiviteten?"
          onConfirm={() =>
            handleActivityLeave(token.token, token.userId, activity?.id)
              .then(() => {
                mutateUser();

                toast.success("Du har forladt aktiviteten.");
              })
              .catch(() =>
                toast.error("Kunne ikke forlade aktiviteten. Prøv igen senere.")
              )
              .finally(() => setShowModal(false))
          }
          onCancel={() => setShowModal(false)}
        />
      )}

      <Navigation />
    </div>
  );
}

export default Activity;
