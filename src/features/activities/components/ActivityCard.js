import { Link } from "react-router-dom";

function ActivityCard({ id, imageSource, title, minAge, maxAge }) {
  return (
    <Link
      className="relative rounded-t-[39px] rounded-l-[39px] overflow-hidden h-[344px] flex-shrink-0 snap-start shadow-md"
      to={`/aktiviteter/${id}`}
    >
      <img
        className="h-full w-full object-cover"
        src={imageSource}
        alt={title}
        title={title}
      />
      <div className="absolute inset-x-0 bottom-0 p-6 bg-cardBackground bg-opacity-80 z-20 rounded-tr-[39px] text-small">
        <p>{title}</p>
        <p>
          {minAge}-{maxAge} år
        </p>
      </div>
    </Link>
  );
}

export default ActivityCard;
