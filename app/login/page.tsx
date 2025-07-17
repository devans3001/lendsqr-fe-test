


/**
 * @file Login page component for Lendsqr application.
 * 
 * This file defines the login page UI and logic for authenticating users.
 * It utilizes React hooks, Next.js routing, and custom hooks for local storage,
 * viewport detection, and page title management.
 * 
 * ## Features
 * - Displays a responsive login form with email and password fields.
 * - Validates user input using `react-hook-form`:
 *   - Email must be in a valid format.
 *   - Password must be at least 6 characters.
 * - Shows error messages for invalid input.
 * - Allows toggling password visibility.
 * - Shows a loading spinner during login.
 * - Stores user login details in local storage (with password hashing).
 * - Redirects authenticated users to the dashboard.
 * - Displays toast notifications for success and error states.
 * - Responsive layout with logo and image.
 * 
 * 
 * @component
 * @example
 * // Usage in Next.js app routing
 * <LoginForm />
 * 
 * @remarks
 * - This component is intended to be used as a page in a Next.js application.
 * - The login details are stored in local storage for demonstration purposes.
 * - Passwords are hashed before storage, but this is not a substitute for secure authentication.
 * - The component redirects to `/dashboard/users` upon successful login.
 */
"use client";

import Logo from "@/components/logo";
import Image from "next/image";
import login from "../../public/login.png";
import { useEffect, useState } from "react";
import { useLocalStorageState } from "@/hooks/useLocalStorage";
import { useRouter } from "next/navigation";
import { LoginDetails } from "@/types/type";
import { hashPassword } from "@/utils/helper";
import { ClipLoader } from "react-spinners";
import { useViewport } from "@/hooks/useViewport";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { usePageTitle } from "@/hooks/usePageTitle";

export default function Page() {
  const router = useRouter();
  const { md } = useViewport();
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [user, setUser] = useLocalStorageState<LoginDetails | null>(null, "user");
  const [isVisible, setIsVisible] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<LoginDetails>({
    defaultValues: { email: "", password: "" },
  });

  useEffect(() => {
    if (user) router.push("/dashboard/users");
  }, [user, router]);

  usePageTitle("Sign In | Lendsqr")

  const onSubmit = async (data: LoginDetails) => {
    setIsLoggingIn(true);

    const hashedPassword = await hashPassword(data.password);

    const newUser: LoginDetails = {
      email: data.email,
      password: hashedPassword,
    };

    setTimeout(() => {
      setUser(newUser);
      toast.success("Sign In Successful");
      router.push("/dashboard/users");
    }, 800);
  };


  return (
    <>
      <div className="loginContainer">
        
        <div className="logoContainer">
          <Logo classname="login-logo" />
          <div className="logoImage">
            <Image src={login} alt="lendsqr login image" fill />
          </div>
        </div>

        <div className="formContainer">
          {!md && <Logo classname="login-logo" />}
          <div className="formContent">
            <h1>Welcome!</h1>
            <p>Enter details to login</p>

            <form onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="">

              <input
                type="text"
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email format",
                  },
                })}
              />
              {errors.email && <p className="error">{errors.email.message}</p>}
                    </label>

              <label>
                <div>

                <input
                  type={isVisible ? "text" : "password"}
                  placeholder="Password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                })}
                />
                <span onClick={() => setIsVisible(!isVisible)}>
                  {isVisible ? "Hide" : "Show"}
                </span>
                </div>
              {errors.password && <p className="error">{errors.password.message}</p>}
              </label>

              <p>Forgot password?</p>

              <button type="submit" >
                {isLoggingIn ? (
                  <ClipLoader size={20} color="#fff" loading={isLoggingIn} />
                ) : (
                  "Login"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

    </>
  );
}

