import { useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function FormInput({
  type = "text",
  placeholder = "",
  errorMessage = null,
  register,
}) {
  useEffect(() => {
    if (!errorMessage) return;

    toast.warn(errorMessage);
  }, [errorMessage]);

  return (
    <input
      className={
        errorMessage
          ? "px-4 py-3 outline-none placeholder:text-quaternaryText border-2 border-red-500"
          : "px-4 py-3 outline-none placeholder:text-quaternaryText"
      }
      placeholder={placeholder}
      type={type}
      {...register}
    />
  );
}

export default FormInput;
