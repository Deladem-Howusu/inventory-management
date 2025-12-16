function Signup({ handleClick }) {
  return (
    <div className="flex flex-col justify-center gap-5 py-4">
      <header className="flex flex-col items-center gap-4">
        <img src="Logo (1).png" alt="Logo" />
        <h1 className="font-semibold text-[30px] text-[#101828]">
          Create an account
        </h1>
        <p className="text-[16px] font-[400] text-[#667085]">
          Start your 30-day free trial
        </p>
      </header>
      <form className="flex flex-col gap-6">
        <div>
          <div className="login">
            <label htmlFor="name">Name*</label>
            <input
              placeholder="Enter your name "
              required
              type="text"
              id="name"
              name="name"
            />
          </div>
          <div className="login">
            <label htmlFor="email">Email*</label>
            <input
              placeholder="Enter your email"
              required
              type="text"
              id="email"
              name="email"
            />
          </div>
          <div className="login">
            <label htmlFor="password">Password *</label>
            <input
              placeholder="Enter Password"
              required
              type="password"
              id="password"
              name="password"
            />
            <span className="text-[14px] text-[#a0a2a8]">
              Must be at least 8 characters
            </span>
          </div>
        </div>

        <button
          type="submit"
          className=" w-[100%] bg-[#1366D9] border-0 font-semibold text-white text-[16px]  rounded-md"
          style={{ padding: "0.5rem 0" }}
        >
          Get Started
        </button>

        <button className="btn flex items-center justify-center gap-2 ">
          <img src="Social icon.png" alt="google" />
          <span className=" text-[16px] font-semibold text-[#48505e]">
            Sign in with Google
          </span>
        </button>

        <span className="flex justify-center items-center text-[#667085]">
          Already Have acoount?{" "}
          <a className="signIn" onClick={handleClick}>
            {" "}
            Log In
          </a>
        </span>
      </form>
    </div>
  );
}

export default Signup;
