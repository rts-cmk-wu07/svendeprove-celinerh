import { useEffect, useState } from "react";

const useHasActivityThisWeekday = (user, activity) => {
  const [hasActivityThisWeekday, setHasActivityThisWeekday] = useState(false);

  useEffect(() => {
    if (!user) return;

    setHasActivityThisWeekday(
      user?.activities.some(
        (userActivity) => userActivity?.weekday === activity?.weekday
      )
    );
  }, [user, activity]);

  return { hasActivityThisWeekday };
};

export default useHasActivityThisWeekday;
