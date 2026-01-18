import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  const [loginError, setLoginError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const { signinUser, googleLogin } = useAuth();

  // ================= Normal Login =================
  const handleLogin = (data) => {
    setLoginError("");

    signinUser(data.email, data.password)
      .then(() => {
        navigate(location.state || "/");
      })
      .catch((error) => {
        if (error.code === "auth/wrong-password") {
          setLoginError("Wrong password. Please try again.");
        } else if (error.code === "auth/user-not-found") {
          setLoginError("No user found with this email.");
        } else {
          setLoginError("Login failed. Please try again.");
        }
      });
  };

  // ================= Google Login =================
  const handleGoogleLogin = () => {
    setLoginError("");

    googleLogin()
      .then((result) => {
        const user = result.user;
        const userInfo = {
          name: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        };

        axiosSecure.post("/user/create", userInfo);
        navigate(location.state || "/");
      })
      .catch(() => {
        setLoginError("Google login failed. Please try again.");
      });
  };

  // ================= Demo Login =================
  const handleDemoLogin = (email, password) => {
    setLoginError("");

    signinUser(email, password)
      .then(() => {
        navigate(location.state || "/");
      })
      .catch(() => {
        setLoginError("Demo login failed.");
      });
  };

  return (
    <div
      className="shadow-lg border border-[#d5d9e0] rounded-xl px-5 flex flex-col justify-center space-y-6 w-[80%] lg:w-[35%] md:w-[35%] mx-auto py-6 my-16"
      data-aos-duration="7000"
      data-aos="fade-left"
    >
      <div>
        <p className="text-2xl text-center font-semibold">Login Now!</p>
        <p className="text-center">
          You didn't have an Account?{" "}
          <Link to="/register">
            <span className="text-primary">Register</span>
          </Link>
        </p>
      </div>

      {/* ================= Login Form ================= */}
      <form onSubmit={handleSubmit(handleLogin)}>
        {/* Email */}
        <label className="label">Your Email</label>
        <input
          type="email"
          className="input w-full"
          placeholder="Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email format",
            },
          })}
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}

        {/* Password */}
        <label className="label mt-3">Password</label>
        <input
          type="password"
          className="input w-full"
          placeholder="Password"
          {...register("password", {
            required: "Password is required",
          })}
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}

        {loginError && (
          <span className="text-red-500 text-sm block mt-1">{loginError}</span>
        )}

        <Link to="/forgotPassword">
          <span className="link link-hover text-sm">Forgot password?</span>
        </Link>

        <button
          type="submit"
          className="btn bg-primary mt-4 w-full text-accent"
        >
          Login
        </button>
      </form>

      {/* ================= Demo Login Buttons ================= */}
      <div className="space-y-2">
        <p className="text-center font-semibold">Demo Login</p>

        <button
          onClick={() => handleDemoLogin("robiul@gmail.com", "123Abc")}
          className="btn w-full btn-outline"
        >
          Login as Admin
        </button>

        <button
          onClick={() => handleDemoLogin("salman@gmail.com", "Abc123")}
          className="btn w-full btn-outline"
        >
          Login as Librarian
        </button>

        <button
          onClick={() => handleDemoLogin("asad@gmail.com", "Abc123")}
          className="btn w-full btn-outline"
        >
          Login as User
        </button>
      </div>

      <p className="text-center">Or</p>

      {/* ================= Google Login ================= */}
      <button
        onClick={handleGoogleLogin}
        className="btn bg-white text-black border-[#e5e5e5] w-full flex gap-2"
      >
        <svg
          aria-label="Google logo"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <g>
            <path d="m0 0H512V512H0" fill="#fff" />
            <path
              fill="#34a853"
              d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
            />
            <path
              fill="#4285f4"
              d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
            />
            <path
              fill="#fbbc02"
              d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
            />
            <path
              fill="#ea4335"
              d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
            />
          </g>
        </svg>
        Sign In with Google
      </button>
    </div>
  );
};

export default Login;
