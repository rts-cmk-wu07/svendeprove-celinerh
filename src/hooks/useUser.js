import { useEffect, useState } from "react";
import { useToken } from "../contexts/TokenProvider";
import { apiUrl } from "../utils/apiUrl";

const useUser = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { token } = useToken();

  const mutateUser = () => {
    if (!token) return;

    fetch(`${apiUrl}/api/v1/users/${token?.userId}`, {
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
        setUser(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error.message);
      });
  };

  useEffect(() => {
    mutateUser();
  }, [token]);

  return { user, isLoading, error, mutateUser };
};

export default useUser;
