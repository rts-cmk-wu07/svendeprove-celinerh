import { Link } from "react-router-dom";

function CalenderCard({ to, title, weekday, time }) {
  return (
    <Link
      className="block bg-calendarCardBackground p-4 rounded-[11px]"
      to={to}
    >
      <h2 className="text-large truncate mb-1">{title}</h2>
      <p className="text-small">
        <span className="capitalize">{weekday}</span> {time}
      </p>
    </Link>
  );
}

export default CalenderCard;
