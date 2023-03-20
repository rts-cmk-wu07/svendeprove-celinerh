import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useToken } from "../../../contexts/TokenProvider";
import { apiUrl } from "../../../utils/apiUrl";

const useRoster = () => {
  const [roster, setRoster] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { token } = useToken();
  const { id } = useParams();

  useEffect(() => {
    if (!token) return;

    fetch(`${apiUrl}/api/v1/users/${token?.userId}/roster/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token.token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw Error("Could not fetch the data for that resource");
        }
        return response.json();
      })
      .then((data) => {
        setRoster(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error.message);
      });
  }, [token, id]);

  return { roster, isLoading, error };
};

export default useRoster;
