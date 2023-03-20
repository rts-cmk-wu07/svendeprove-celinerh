import { apiUrl } from "../../utils/apiUrl";

const handleActivitySignUp = (userToken, userId, activityId) => {
  return fetch(`${apiUrl}/api/v1/users/${userId}/activities/${activityId}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  }).then((response) => {
    if (!response.ok) {
      throw Error("Could not fetch the data for that resource");
    }
    return response.json();
  });
};

export default handleActivitySignUp;
