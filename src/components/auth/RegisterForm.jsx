import { useForm } from "react-hook-form";
import ErrorMessage from "../ui/ErrorMessage";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useState } from "react";
import GoogleButton from "../ui/GoogleButton";
import { signInWithGoogle } from "../../api/auth";

const RegisterForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [registerError, setRegisterError] = useState("");

    // UseMutation for the registration process
    const { mutateAsync: registerMutation, isPending: registerPending } = useMutation({
        queryKey: ["register"],
        mutationFn: (data) => {
            return handleRegister(data);
        },
    });

    const { mutateAsync: googleRegisterMutation, isPending: googlePending } =
        useMutation({
            queryKey: ["register"],
            mutationFn: () => {
                return handleGoogleRegister();
            },
        });

    async function handleRegister(data) {
        console.log("Registration successful", data);
        try {
            // Simulate successful registration
            // navigate("/");
        } catch (error) {
            if (error instanceof AxiosError) {
                return setRegisterError(error.response.data.detail);
            }
            setRegisterError("Registration failed. Please try again.");
        }
    }

    async function handleGoogleRegister() {
        try {
            const response = await signInWithGoogle();
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    const onSubmit = (data) => {
        registerMutation(data);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="relative sm:max-w-xl sm:mx-auto"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-customLightGreen to-veryLightGreen shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
            <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                <div className="max-w-md mx-auto">
                    <div>
                        <h1 className="text-2xl text-customGreen font-semibold">Register</h1>
                    </div>
                    <div className="divide-y divide-gray-200">
                        <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                            <div className="relative py-2">
                                <input
                                    autoComplete="off"
                                    id="username"
                                    name="username"
                                    type="text"
                                    className="peer placeholder-transparent h-10 w-full my-1 p-2 rounded-lg shadow focus:outline-veryLightGreen text-gray-900"
                                    placeholder="Username"
                                    {...register("username", {
                                        required: "Username is required",
                                    })}
                                />
                                <label
                                    htmlFor="username"
                                    className="absolute left-1 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                >
                                    Username
                                </label>
                            </div>
                            {errors.username && (
                                <ErrorMessage message={errors.username.message} />
                            )}

                            <div className="relative py-2">
                                <input
                                    autoComplete="off"
                                    id="email"
                                    name="email"
                                    type="email"
                                    className="peer placeholder-transparent h-10 w-full my-1 p-2 rounded-lg shadow focus:outline-veryLightGreen text-gray-900"
                                    placeholder="Email"
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                            message: "Invalid email address",
                                        },
                                    })}
                                />
                                <label
                                    htmlFor="email"
                                    className="absolute left-1 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                >
                                    Email
                                </label>
                            </div>
                            {errors.email && <ErrorMessage message={errors.email.message} />}

                            <div className="relative py-2">
                                <input
                                    autoComplete="off"
                                    id="password"
                                    name="password"
                                    type="password"
                                    className="peer placeholder-transparent h-10 w-full my-1 p-2 rounded-lg shadow focus:outline-veryLightGreen text-gray-900"
                                    placeholder="Password"
                                    {...register("password", {
                                        required: "Password is required",
                                        minLength: {
                                            value: 6,
                                            message: "Password must be at least 6 characters long",
                                        },
                                    })}
                                />
                                <label
                                    htmlFor="password"
                                    className="absolute left-1 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                >
                                    Password
                                </label>
                            </div>
                            {errors.password && (
                                <ErrorMessage message={errors.password.message} />
                            )}

                            {registerError && <ErrorMessage message={registerError} />}

                            <GoogleButton
                                type="button"
                                onClick={googleRegisterMutation}
                                text="Register with Google"
                            />

                            <div className="relative">
                                <button
                                    type="submit"
                                    className="bg-customLightGreen hover:bg-customGreen text-primarylight py-2 px-3 rounded-lg shadow focus:bg-customGreen disabled:bg-secondary disabled:cursor-not-allowed"
                                    disabled={registerPending || googlePending}
                                >
                                    {registerPending || googlePending ? "Loading..." : "Register"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default RegisterForm;
