const Spinner = ({ size, color, position }) => {
  const spinnerSize = size || "h-12 w-12";
  const spinnerColor = color || "border-[#E1A1E9]";

  return (
    <div className="relative">
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
