import { useState } from "react";

function ListElement({ icon, name, onclick, path }) {
  const [hover, setHovered] = useState(false);
  return (
    <li
      onClick={onclick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <a href="#" className="flex items-center gap-7 pl-5 py-1">
        <span
          className={`${
            hover || path ? "text-[#0a52ee]" : "text-[#5D6679]"
          } s-[2px]`}
        >
          {icon}
        </span>
        <span
          className={`text-[14px] ${
            hover || path ? "text-[#0a52ee]" : "text-[#5D6679]"
          } `}
        >
          {name}
        </span>
      </a>
    </li>
  );
}

export default ListElement;
