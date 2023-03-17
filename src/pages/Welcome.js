import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="relative bg-splash h-screen bg-no-repeat bg-center bg-cover">
      <div className="absolute top-2/4 mt-3">
        <h1 className="flex flex-col pl-11">
          <span className="uppercase font-Roboto text-logoSize1 text-transparent text-stroke-1">
            Landrup
          </span>
          <span className="uppercase font-RacingSansOne text-logoSize2 text-logoText text-stroke-2">
            Dans
          </span>
        </h1>
        <div className="w-[242px] h-[14px] bg-logoLineBackground shadow-logoLine mt-4"></div>
      </div>
      <Link
        className="button absolute left-1/2 bottom-0 mb-14 -translate-x-1/2 animate-fade-in opacity-0"
        to="/aktiviteter"
        style={{
          animationDelay: "1.5s",
        }}
      >
        Kom i gang
      </Link>
    </div>
  );
}

export default Welcome;
