import { useEffect, useState } from "react";
import { useToken } from "../contexts/TokenProvider";

const useUser = () => {
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { token } = useToken();

  useEffect(() => {
    fetch(`http://localhost:4000/api/v1/users/${token?.userId}`, {
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
  }, [token]);

  return { user, isLoading, error };
};

export default useUser;
