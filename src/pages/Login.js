import { useEffect, useState } from "react";
import { useToken } from "../contexts/TokenProvider";
import { useNavigate } from "react-router-dom";
import useCookie from "react-use-cookie";
import FormInput from "../components/FormInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const schema = yup
  .object({
    username: yup
      .string()
      .required("Username is required")
      .matches(/^[a-z0-9]+$/i, "Valid characters for username: a-z and 0-9"),
    password: yup
      .string()
      .required("Password is required")
      .matches(/^[a-z0-9]+$/i, "Valid characters for password: a-z and 0-9"),
    rememberMe: yup.boolean(),
  })
  .required();

function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [, setTokenCookie] = useCookie("token", undefined);
  const { token, setToken } = useToken();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    setIsLoading(true);
    let toastId;

    if (Object.keys(errors).length === 0) {
      toastId = toast.loading("Logging in...");
    }

    fetch("http://localhost:4000/auth/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: data.username,
        password: data.password,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          if (response.status === 401) {
            throw new Error("Invalid username or password");
          }

          throw new Error("Something went wrong. Try again later.");
        }

        return response.json();
      })
      .then((token) => {
        if (data.rememberMe) {
          const milliseconds = token.validUntil - Date.now();
          const days = milliseconds / (1000 * 60 * 60 * 24);
          setTokenCookie(JSON.stringify(token), {
            days: days,
            sameSite: "strict",
          });
        } else {
          // session cookie
        }

        setToken(token);

        toast.update(toastId, {
          render: "Logged in successfully",
          type: "success",
          isLoading: false,
          autoClose: 3000,
        });
      })
      .catch((error) => {
        setTimeout(() => {
          toast.update(toastId, {
            render: error.message,
            type: "error",
            isLoading: false,
            autoClose: 3000,
          });
        }, 1000);
      })
      .finally(() => setIsLoading(false));
  };

  const onError = (errors, e) => {
    if (errors.username) {
      toast.error(errors.username.message);
    }

    if (errors.password) {
      toast.error(errors.password.message);
    }
  };

  return (
    <div className="bg-splash h-screen bg-no-repeat bg-center bg-cover grid grid-cols-1 grid-rows-1 overflow-clip">
      <div className="bg-primaryBackground w-[757px] h-[450px] bg-opacity-50 -rotate-[27deg] col-span-full row-span-full place-self-center"></div>
      <form
        className="max-w-[332px] w-full mx-auto col-span-full row-span-full place-self-center z-50 flex flex-col gap-3"
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <h1 className="text-xlarge text-heading">Log ind</h1>
        <FormInput
          placeholder="brugernavn"
          errorMessage={errors.username?.message}
          register={register("username")}
        />
        <FormInput
          placeholder="adgangskode"
          type="password"
          errorMessage={errors.password?.message}
          register={register("password")}
        />
        <label className="flex items-center gap-1 text-primaryText">
          <input
            className="w-4 h-4"
            type="checkbox"
            name="remember"
            {...register("rememberMe")}
          />
          Husk mig
        </label>
        <button
          className="button mx-auto"
          type="submit"
          disabled={isLoading ? true : false}
        >
          Log ind
        </button>
      </form>
    </div>
  );
}

export default Login;
