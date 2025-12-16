function OverallSummaryCard({
  title,
  color,
  description,
  amount,
  quantity,
  timeperiod,
}) {
  return (
    <div className="flex flex-col gap-4 not-last:border-r border-[#F0F1F3] w-[18rem] px-8 ">
      <h1 style={{ color: color }} className={`text-[16px] font-medium`}>
        {title}
      </h1>
      <div className="flex justify-between">
        <div className="flex flex-col gap-4">
          <p className="text-[16px] text-[#5D6679] font-semibold">{quantity}</p>
          <span className="text-[14px] text-[#858D9D]">{timeperiod}</span>
        </div>
        <div className="flex flex-col gap-4 text-right">
          <p className="text-[16px] text-[#5D6679] font-semibold">{amount}</p>
          <span className="text-[14px] text-[#858D9D]">{description}</span>
        </div>
      </div>
    </div>
  );
}
export default OverallSummaryCard;
