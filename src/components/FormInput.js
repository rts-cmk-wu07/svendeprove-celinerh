import { useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function FormInput({
  type = "text",
  placeholder = "",
  errorMessage = null,
  register,
}) {
  return (
    <div className="w-full">
      <input
        className={
          errorMessage
            ? "w-full px-4 py-3 outline-none placeholder:text-quaternaryText border-2 border-red-500"
            : "mb-[24px] w-full px-4 py-3 outline-none placeholder:text-quaternaryText"
        }
        placeholder={placeholder}
        type={type}
        {...register}
      />
      {errorMessage && (
        <div className="text-white text-sm bg-red-500 pl-4 rounded-b-sm">
          {errorMessage}
        </div>
      )}
    </div>
  );
}

export default FormInput;
