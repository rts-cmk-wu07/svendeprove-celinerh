import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useSearchParams } from "react-router-dom";
import ActivityCard from "../features/activities/components/ActivityCard";
import ErrorMessage from "../components/ErrorMessage";
import Heading from "../components/Heading";
import Navigation from "../components/Navigation";
import Spinner from "../components/Spinner";
import Swiper from "../components/Swiper";
import useActivities from "../features/activities/hooks/useActivities";

function Search() {
  const { activities, isLoading, error } = useActivities();
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");

  useEffect(() => {
    if (!query) {
      setSearchParams({});
      return;
    }

    setSearchParams({ q: query });
  }, [query, setSearchParams]);

  const filteredActivities = activities?.filter((activity) =>
    query
      ? activity.name.toLowerCase().includes(query.toLowerCase())
        ? true
        : activity.description.toLowerCase().includes(query.toLowerCase())
        ? true
        : activity.weekday.toLowerCase().includes(query.toLowerCase())
        ? true
        : activity.time.toLowerCase().includes(query.toLowerCase())
      : true
  );

  return (
    <div className="page h-screen flex flex-col gap-6">
      <Heading title="Søg" />
      <div className="flex items-center bg-searchInputBackground p-3">
        <input
          className="w-full bg-transparent outline-none placeholder:text-placeholderText text-primaryText"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Søg efter aktiviteter"
          autoFocus
        />
        <BiSearch className="text-medium text-searchIcon" />
      </div>
      {error && <ErrorMessage />}
      {isLoading && <Spinner />}
      {filteredActivities?.length === 0 && (
        <ErrorMessage message="Der blev ikke fundet nogle aktiviteter. Prøv at søge efter noget andet." />
      )}
      {query && filteredActivities && filteredActivities?.length > 0 && (
        <Swiper>
          {filteredActivities?.map((activity) => (
            <ActivityCard
              key={activity.id}
              id={activity.id}
              imageSource={activity?.asset?.url}
              title={activity?.name}
              minAge={activity?.minAge}
              maxAge={activity?.maxAge}
            />
          ))}
        </Swiper>
      )}

      <Navigation />
    </div>
  );
}

export default Search;
