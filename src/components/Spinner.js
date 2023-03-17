const Spinner = ({ size, color, centered = false }) => {
  const spinnerSize = size || "h-12 w-12";
  const spinnerColor = color || "border-[#E1A1E9]";

  if (centered)
    return (
      <div className="h-full grid grid-cols-1 grid-rows-1">
        <div
          className={`${spinnerSize} relative col-span-full row-span-full place-self-center`}
        >
          <div
            className={`${spinnerSize} rounded-full absolute
      border-8 border-solid border-[#E9E9E9]`}
          ></div>
          <div
            className={`${spinnerSize} ${spinnerColor} rounded-full animate-spin absolute
        border-8 border-solid border-t-transparent shadow-md`}
          ></div>
        </div>
      </div>
    );

  return (
    <div className={`${spinnerSize} relative`}>
      <div
        className={`${spinnerSize} rounded-full absolute
        border-8 border-solid border-[#E9E9E9]`}
      ></div>
      <div
        className={`${spinnerSize} ${spinnerColor} rounded-full animate-spin absolute
          border-8 border-solid border-t-transparent shadow-md`}
      ></div>
    </div>
  );
};

export default Spinner;
