function Cardpoint({ img, point, amount, border }) {
  return (
    <div
      className={`flex flex-col gap-5 pr-2 w-45 ${
        border ? "border-r border-[#cac8c86b]" : ""
      }`}
    >
      <div className="flex items-center justify-center">
        <img alt="img" src={img} className="w-8" />
      </div>
      <div className="flex justify-between items-center px-2 ">
        <span className="text-[#5D6679] text-[16px] font-semibold">
          {amount}
        </span>
        <span className="text-[#667085] font-medium text-[14px]">{point}</span>
      </div>
    </div>
  );
}
export default Cardpoint;
