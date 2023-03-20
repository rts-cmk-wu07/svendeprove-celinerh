import { apiUrl } from "../../utils/apiUrl";

const handleActivityLeave = (userToken, userId, activityId) => {
  return fetch(`${apiUrl}/api/v1/users/${userId}/activities/${activityId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  }).then((response) => {
    if (!response.ok) {
      throw Error("Could not fetch the data for that resource");
    }
  });
};

export default handleActivityLeave;
