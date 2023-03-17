import { useEffect, useState } from "react";

const useIsSignedUp = (user, activity) => {
  const [isSignedUp, setIsSignedUp] = useState(false);

  useEffect(() => {
    if (!user) return;

    setIsSignedUp(
      user?.activities.some((userActivity) => userActivity?.id === activity?.id)
    );
  }, [user, activity]);

  return { isSignedUp };
};

export default useIsSignedUp;
