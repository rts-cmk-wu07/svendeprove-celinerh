import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiUrl } from "../../../utils/apiUrl";

const useActivity = () => {
  const [activity, setActivity] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`${apiUrl}/api/v1/activities/${id}`, {
      method: "GET",
    })
      .then((response) => {
        if (!response.ok) {
          throw Error("Could not fetch the data for that resource");
        }
        return response.json();
      })
      .then((data) => {
        setActivity(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error.message);
      });
  }, [id]);

  return { activity, isLoading, error };
};

export default useActivity;
