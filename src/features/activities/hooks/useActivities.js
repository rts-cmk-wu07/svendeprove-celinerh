import { useEffect, useState } from "react";
import { apiUrl } from "../../../utils/apiUrl";

const useActivities = () => {
  const [activities, setActivities] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${apiUrl}/api/v1/activities`, {
      method: "GET",
    })
      .then((response) => {
        if (!response.ok) {
          throw Error("Could not fetch the data for that resource");
        }
        return response.json();
      })
      .then((data) => {
        setActivities(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error.message);
      });
  }, []);

  return { activities, isLoading, error };
};

export default useActivities;
