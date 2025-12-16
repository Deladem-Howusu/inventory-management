function Reportpoint({ point, value, color }) {
  return (
    <div className="flex flex-col justify-center gap-1 text-left">
      <h1 className="font-medium text-[16px] text-[#5D6679] pb-[12px]">
        {value}
      </h1>
      <p className="text-[14px]" style={{ color: color }}>
        {point}
      </p>
    </div>
  );
}

export default Reportpoint;
