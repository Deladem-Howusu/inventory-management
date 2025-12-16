import { Search } from "lucide-react";

function InputBar() {
  return (
    <div className="relative">
      <span
        className="absolute top-2 left-3 text-[#5D6679] 
      "
      >
        {" "}
        <Search className="w-5" />
      </span>
      <input type="text" placeholder="Search product, supplier, order" />
    </div>
  );
}

export default InputBar;
