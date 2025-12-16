function LowQuantity() {
  return (
    <div className="bg-white ml-5 w-[25rem] shadow rounded-[10px] mt-5">
      <div className="flex justify-between py-5 px-5 items-center border-b border-gray-300">
        <h1 className="text-[#383E49] font-medium text-[16px]">
          Low Quantity Stock
        </h1>
        <p className="text-[#0F50AA] text-[14px]"> See All </p>
      </div>
      <div className="flex justify-between items-center px-5 py-3">
        <img src="/Rectangle 71.png" alt="package" />
        <div>
          <h1 className="text-[16px] text-gray-800 font-semibold">Tata Salt</h1>
          <p className="text-gray-500 text-[14px] ">
            Remaining Quantity: <span>10 packet</span>
          </p>
        </div>
        <span className="text-[12px] text-[#AA3028] bg-[#FEECEB] px-2 rounded-[16px]">
          Low
        </span>
      </div>
    </div>
  );
}

export default LowQuantity;
