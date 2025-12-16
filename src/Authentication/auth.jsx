import { useState } from "react";
import Login from "./login";
import Signup from "./signup";

function Auth() {
  const [signup, setSignup] = useState(true);

  const handleClick = () => {
    setSignup(!signup);
  };

  return (
    <div className="flex  items-center justify-center gap-50 h-lvh w-screen ">
      <img src="Logo.png" alt="Logo" />
      {signup ? (
        <Signup handleClick={handleClick} />
      ) : (
        <Login handleClick={handleClick} />
      )}
    </div>
  );
}

export default Auth;
