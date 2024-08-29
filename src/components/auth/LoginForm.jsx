// Basic login form, validation and errors handled by react-hook-form

import { useForm } from "react-hook-form";
import ErrorMessage from "../ui/ErrorMessage";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import GoogleButton from "../ui/GoogleButton";
import { signInWithGoogle } from "../../api/auth";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loginError, setLoginError] = useState("");

  // const navigate = useNavigate();

  const { mutateAsync: loginMutation, isPending: loginPending } = useMutation({
    queryKey: ["login"],
    mutationFn: (data) => {
      return handleLogin(data);
    },
  });

  const { mutateAsync: googleLoginMutation, isPending: googlePending } =
    useMutation({
      queryKey: ["login"],
      mutationFn: () => {
        return handleGoogleLogin();
      },
    });

  async function handleLogin() {
    console.log("Login successful");
    try {
      // setTimeout(() => {
      //   navigate("/");
      // }, 1000);
    } catch (error) {
      if (error instanceof AxiosError) {
        return setLoginError(error.response.data.detail);
      }
      setLoginError("Invalid login credentials");
    }
  }

  async function handleGoogleLogin() {
    try {
      const response = await signInWithGoogle();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  const onSubmit = (data) => {
    loginMutation(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative py-3 sm:max-w-xl sm:mx-auto"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-green-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
      <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
        <div className="max-w-md mx-auto">
          <div>
            <h1 className="text-2xl font-semibold">Login</h1>
          </div>
          <div className="divide-y divide-gray-200">
            <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
              <div className="relative">
                <input
                  autoComplete="off"
                  id="username"
                  name="username"
                  type="text"
                  className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                  placeholder="Username"
                  {...register("username", {
                    required: "username is required",
                  })}
                />
                <label
                  htmlFor="username"
                  className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                >
                  Username
                </label>
              </div>
              {errors.username && (
                <ErrorMessage message={errors.username.message} />
              )}

              <div className="relative">
                <input
                  autoComplete="off"
                  id="password"
                  name="password"
                  type="password"
                  className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                  placeholder="Password"
                  {...register("password", {
                    required: "password is required",
                  })}
                />
                <label
                  htmlFor="password"
                  className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                >
                  Password
                </label>
              </div>
              {errors.password && (
                <ErrorMessage message={errors.password.message} />
              )}

              {loginError && <ErrorMessage message={loginError} />}

              <GoogleButton
                type="button"
                onClick={googleLoginMutation}
                text="Login with Google"
              />

              <div className="relative">
                <button
                  type="submit"
                  className="bg-green-700 text-white rounded-md px-2 py-1 hover:bg-green-800 focus:bg-green-800 disabled:bg-gray-400 disabled:cursor-not-allowed"
                  disabled={loginPending || googlePending}
                >
                  {loginPending || googlePending ? "Loading..." : "Login"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
