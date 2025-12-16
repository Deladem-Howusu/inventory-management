function Summary({
  title,
  img,
  number,
  description,
  Quantity,
  detail,
  image,
  margin,
}) {
  return (
    <div
      className={`summary bg-white ${margin} ml-5 pl-2 pb-5 py-2 rounded-[10px] w-[25rem] flex flex-col gap-5`}
    >
      <h1 className="text-[17px] font-medium text-[#5a606b] pl-2">{title}</h1>
      <div className="flex">
        <div className="flex flex-col justify-center items-center w-45 border-r border-[#cac8c86b]">
          <img alt="img" className="w-8" src={img} />
          <p className="text-[#5D6679] text-[16px] font-semibold">{number}</p>
          <span className="text-[#667085] font-medium text-[14px]">
            {description}
          </span>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center w-45 ">
            <img alt="img" className="w-8" src={image} />
            <p className="text-[#5D6679] text-[16px] font-semibold">
              {Quantity}
            </p>
            <span className="text-[#667085] font-medium text-[14px]">
              {detail}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;
