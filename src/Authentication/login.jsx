import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

function Login({ handleClick }) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center gap-5 py-4">
      <header className="flex flex-col items-center gap-4">
        <img src="Logo (1).png" alt="Logo" />
        <h1 className="font-semibold text-4xl text-[#101828]">
          Login to your account
        </h1>
        <p className="text-[16px] font-[500] text-[#667085]">
          Welcome back! Please enter your details.
        </p>
      </header>
      <form className="flex flex-col gap-6">
        <div>
          <div className="login">
            <label htmlFor="email">Email</label>
            <input required type="text" id="email" name="email" />
          </div>
          <div className="login">
            <label htmlFor="password">Password:</label>
            <input required type="password" id="password" name="password" />
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <input
              className=" "
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
            />

            <label
              className="pl-1.5 text-[14px] font-semibold text-[#48505e] "
              htmlFor="rememberMe"
            >
              Remember for 30 days
            </label>
          </div>
          <a href="#">Forgot Password</a>
        </div>
        <button
          onClick={() => navigate("/home")}
          type="submit"
          className=" w-[100%] bg-[#1366D9] border-0 font-semibold text-white text-[16px]  rounded-md"
          style={{ padding: "0.5rem 0" }}
        >
          Sign in
        </button>

        <button className="btn flex items-center justify-center gap-2 ">
          <img src="Social icon.png" alt="google" />
          <span className=" text-[16px] font-semibold text-[#48505e]">
            Sign in with Google
          </span>
        </button>

        <span className="flex justify-center items-center text-[#667085]">
          Don’t have an account?{" "}
          <a className="signup" onClick={handleClick}>
            Sign Up
          </a>
        </span>
      </form>
    </div>
  );
}

export default Login;
