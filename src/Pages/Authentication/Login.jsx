import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
const axiosSecure = useAxiosSecure()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });


  const { signinUser, googleLogin } = useAuth();


  const handleLogin = (data) => {
    signinUser(data.email, data.password)
      .then(() => {
        // Signed in
        if (location.state) {
          navigate(location.state);
        } else {
          navigate("/");
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };


  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {

     const user = result.user;
     const userInfo = {
       name: user.displayName,
       email: user.email,
       photoURL: user.photoURL,
     };

axiosSecure.post('/user/create', userInfo).then(res=>{

})

        if (location.state) {
          navigate(location.state);
        } else {
          navigate("/");
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div
      className="shadow-lg border border-[#d5d9e0] rounded-xl px-5 h-[50%] flex flex-col justify-center space-y-6 w-[80%] lg:w-[35%] md:w-[35%] mx-auto py-4 my-15"
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
        <label className="label">Password</label>
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

        <Link to="/forgotPassword">
          <div>
            <span className="link link-hover text-sm">Forgot password?</span>
          </div>
        </Link>

        <button
          type="submit"
          className="btn bg-primary mt-4 w-full text-accent"
        >
          Login
        </button>
      </form>

      <p className="text-center">Or</p>

      <button
        onClick={handleGoogleLogin}
        className="btn bg-white text-black border-[#e5e5e5] w-full"
      >
        <svg
          aria-label="Google logo"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <g>
            <path d="m0 0H512V512H0" fill="#fff"></path>
            <path
              fill="#34a853"
              d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
            ></path>
            <path
              fill="#4285f4"
              d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
            ></path>
            <path
              fill="#fbbc02"
              d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
            ></path>
            <path
              fill="#ea4335"
              d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
            ></path>
          </g>
        </svg>
        Sign In with Google
      </button>
    </div>
  );
};

export default Login;
