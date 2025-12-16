import Reportpoint from "./Reportpoint";

function ReportOverview() {
  return (
    <div className="bg-white rounded-[10px]   overview">
      <h1 className="font-medium text-[20px] text-[#383E49] py-[20px] px-[12px]">
        Overview
      </h1>

      <div className="flex justify-between pb-[16px] pl-[17px] pr-[86px]">
        <Reportpoint point="Total Profit" value="$21,190" color="#555555" />
        <Reportpoint point="Revenue" value="$8,300" color="#DBA362" />
        <Reportpoint point="Sales" value="$17,432" color="#845EBC" />
      </div>
      <div className="w-full border-b border-[#F0F1F3] pt-[16px]"></div>
      <div className="flex justify-between px-[17px] py-[22px] pr-[30px]">
        <Reportpoint
          point="Net purchase value"
          value="$10,000"
          color="#667085"
        />
        <Reportpoint point="Net sales value" value="$117,432" color="#667085" />
        <Reportpoint point="MoM Profit" value="$80,432" color="#667085" />
        <Reportpoint point="YoY Profit" value="$110,432" color="#667085" />
      </div>
    </div>
  );
}

export default ReportOverview;
