import { Navigate } from "react-router-dom";
import { useToken } from "../contexts/TokenProvider";
import InstructorCalendar from "./InstructorCalendar";
import UserCalendar from "./UserCalendar";

function Calendar() {
  const { token } = useToken();

  if (token.role === "default") {
    return <UserCalendar />;
  } else if (token.role === "instructor") {
    return <InstructorCalendar />;
  }

  return <Navigate to="/" />;
}

export default Calendar;
