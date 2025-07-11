"use client";
import Logo from "@/components/logo";
import Image from "next/image";
import login from "../../public/login.png";
import { useState } from "react";
import { useLocalStorageState } from "@/hooks/useLocalStorage";
import { useRouter } from "next/navigation";
import { LoginDetails } from "@/types/type";
import { hashPassword } from "@/utils/helper";

function Login() {
  const router = useRouter();
  const [details, setDetails] = useState<LoginDetails>({
    email: "",
    password: "",
  });

  const [user, setUser] = useLocalStorageState<LoginDetails>(details, "user");
  console.log(user);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const hashedPassword = await hashPassword(details.password);

    const newUser: LoginDetails = {
      email: details.email,
      password: hashedPassword,
    };

    setUser(newUser);
    router.push("/dashboard");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDetails((val) => ({ ...val, [name]: value }));
  };

  const [isVisible, setIsVisible] = useState<boolean>(false);

  const isEmpty = !details.email && !details.password;

  return (
    <div className="loginContainer">
      {/* logoContainer  */}
      <div className="logoContainer">
        <Logo />

        <Image src={login} alt="lendsqr login image" width={100} height={100} />
      </div>

      {/* formContainer  */}
      <div className="formContainer">
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

            <button type="submit" disabled={isEmpty}>
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
