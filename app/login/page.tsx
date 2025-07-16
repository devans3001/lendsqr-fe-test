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
import { toast } from "react-toast";
import { usePageTitle } from "@/hooks/usePageTitle";

function Login() {
  const router = useRouter();
  const { md } = useViewport();
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [user, setUser] = useLocalStorageState<LoginDetails | null>(null, "user");
  const [isVisible, setIsVisible] = useState(false);

  const { register, handleSubmit, formState: { errors }, watch } = useForm<LoginDetails>({
    defaultValues: { email: "", password: "" },
  });

  useEffect(() => {
    if (user) router.push("/dashboard/users");
  }, [user, router]);

  usePageTitle("Sign In | Lendsqr")

  const onSubmit = async (data: LoginDetails) => {
    setIsLoggingIn(true);

    if (!data.email.includes("@") || data.password.length < 6) {
      toast.error("Invalid email or password. Please try again.");
      setIsLoggingIn(false);
      return;
    }

    const hashedPassword = await hashPassword(data.password);

    const newUser: LoginDetails = {
      email: data.email,
      password: hashedPassword,
    };

    setTimeout(() => {
      setUser(newUser);
      toast.success("Welcome back 😁");
      router.push("/dashboard/users");
    }, 800);
  };

  const isEmpty = !watch("email") || !watch("password");

  return (
    <>
      <div className="loginContainer">
        {/* logoContainer */}
        <div className="logoContainer">
          <Logo classname="login-logo" />
          <div className="logoImage">
            <Image src={login} alt="lendsqr login image" fill />
          </div>
        </div>

        {/* formContainer */}
        <div className="formContainer">
          {!md && <Logo classname="login-logo" />}
          <div className="formContent">
            <h1>Welcome!</h1>
            <p>Enter details to login</p>

            <form onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="">

              <input
                type="email"
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
              {errors.password && <p className="error">{errors.password.message}</p>}
              </label>

              <p>Forgot password?</p>

              <button type="submit" disabled={isLoggingIn}>
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

export default Login;
