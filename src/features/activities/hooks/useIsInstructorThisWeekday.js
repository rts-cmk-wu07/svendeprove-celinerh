import { useEffect, useState } from "react";
import useActivities from "./useActivities";

const useIsInstructorThisWeekday = (role, user, activityWeekday) => {
  const [isInstructorThisWeekday, setIsInstructorThisWeekday] = useState(false);
  const { activities } = useActivities();

  const instructorActivities = activities?.filter(
    (activity) => activity?.instructorId === user?.id
  );

  useEffect(() => {
    if (role !== "instructor") return;
    if (!user) return;

    setIsInstructorThisWeekday(
      instructorActivities?.some(
        (instructorActivity) => instructorActivity?.weekday === activityWeekday
      )
    );
  }, [role, user, activityWeekday, instructorActivities]);

  return { isInstructorThisWeekday };
};

export default useIsInstructorThisWeekday;
