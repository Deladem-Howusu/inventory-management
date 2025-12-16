import OverallSummaryCard from "./OverallInventory";

function Card({ head, children, type, value }) {
  return (
    <div className="w-full pl-[16px] pt-[20px] rounded-[8px] bg-white h-[12rem]">
      <h1 className="text-[20px] font-medium text-[#383E49] mb-7">{head}</h1>
      <div className="mt-7 flex justify-between">
        <div className="flex flex-col gap-4 border-r border-[#F0F1F3] w-[10rem]">
          <h1 className="text-[#1570EF] text-[16px] font-medium">{type}</h1>
          <p className="text-[16px] text-[#5D6679] font-semibold">{value}</p>
          <span className="text-[14px] text-[#858D9D]">Last 7 days</span>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Card;
