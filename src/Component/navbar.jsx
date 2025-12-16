import { Bell, CircleUser, Moon } from "lucide-react";
import InputBar from "./Inputbar";

function Navbar() {
  return (
    <div className="header ">
      <div className=" flex items-center py-5  bg-white shadow px-10 justify-between">
        <InputBar />
        <div className="flex gap-3 items-center   justify-center">
          <Moon className="text-[#5D6679]" />
          <Bell className="text-[#5D6679]" />
          <CircleUser className="text-[#5D6679]" />
        </div>
      </div>
    </div>
  );
}
export default Navbar;
