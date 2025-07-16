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
import { toast, ToastContainer } from "react-toast";

function Login() {
  const router = useRouter();

  const { md } = useViewport();
  const [details, setDetails] = useState<LoginDetails>({
    email: "",
    password: "",
  });
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false);

  const [user, setUser] = useLocalStorageState<LoginDetails>(details, "user");

  useEffect(() => {
    // to prevent another login
    if (user) router.push("/dashboard/users");
  }, [user]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);

    const hashedPassword = await hashPassword(details.password);

    const newUser: LoginDetails = {
      email: details.email,
      password: hashedPassword,
    };

    setTimeout(() => {
      setUser(newUser);
      router.push("/dashboard/users");
    }, 800);
    toast.success("Welcom back 😁")
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDetails((val) => ({ ...val, [name]: value }));
  };

  const [isVisible, setIsVisible] = useState<boolean>(false);

  const isEmpty = !details.email && !details.password;

  return (
    <>
      <div className="loginContainer">
        {/* logoContainer  */}
        <div className="logoContainer">
          <Logo classname="login-logo" />

          <div className="logoImage">
            <Image src={login} alt="lendsqr login image" fill />
          </div>
        </div>

        {/* formContainer  */}
        <div className="formContainer">
          {!md && <Logo classname="login-logo" />}

          <div className="formContent">
            <h1>Welcome!</h1>
            <p>Enter details to login</p>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="email"
                value={details.email}
                onChange={handleInputChange}
                placeholder="Email"
              />

              <label htmlFor="">
                <input
                  type={isVisible ? "text" : "password"}
                  name="password"
                  value={details.password}
                  onChange={handleInputChange}
                  placeholder="Password"
                />
                <span onClick={() => setIsVisible(!isVisible)}>
                  {!isVisible ? "show" : "hide"}
                </span>
              </label>

              <p>Forgot password?</p>

              <button type="submit" disabled={isLoggingIn || isEmpty}>
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
      <ToastContainer position="top-center"/>
    </>
  );
}

export default Login;
