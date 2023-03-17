import { useEffect, useState } from "react";
import { useToken } from "../contexts/TokenProvider";
import { Link, useNavigate } from "react-router-dom";
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
      .required("Brugernavn er påkrævet")
      .matches(/^[a-zæøå0-9]+$/i, "Kun bogstaver og tal er gyldige"),
    password: yup.string().required("Adgangskode er påkrævet"),
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
      navigate("/aktiviteter");
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
      toastId = toast.loading("Logger ind...");
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
            throw new Error("Ugyldigt brugernavn eller adgangskode.");
          }

          throw new Error("Noget gik galt. Prøv igen senere.");
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
          render: "Du er nu logget ind.",
          type: "success",
          isLoading: false,
          autoClose: 3000,
        });

        navigate("/kalender");
      })
      .catch((error) => {
        setTimeout(() => {
          toast.update(toastId, {
            render: "Noget gik galt. Prøv igen senere.",
            type: "error",
            isLoading: false,
            autoClose: 3000,
          });
        }, 1000);
      })
      .finally(() => setIsLoading(false));
  };

  const onError = (errors, e) => {
    if (errors.username && errors.password) {
      toast.error("Brugernavn og adgangskode er påkrævet.");
      return;
    }

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
        <p className="text-white text-center">
          Fortsæt uden login? Gå til{" "}
          <Link className="underline" to="/aktiviteter">
            aktiviteter
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
