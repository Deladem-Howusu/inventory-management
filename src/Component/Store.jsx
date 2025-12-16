import Button from "./button";

function Store({ branchName, storeName, streetName, address, number }) {
  return (
    <div className=" flex mt-8 rounded-lg border border-[#F0F1F3] w-full">
      <div className="w-[300px] px-[3rem] py-[3.5rem] flex items-center justify-center bg-[#F0F1F3]">
        <h1 className="text-[16px] font-semibold  header1 text-[#48505E]">
          {branchName}
        </h1>
      </div>
      <div className=" w-full px-6">
        <div className="mt-2 flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <h2 className="text-[16px] font-medium   text-[#5D6679]">
              {storeName}
            </h2>
            <Button
              textColor={"blue"}
              label={"Edit"}
              backgroundColor={"none"}
            />
          </div>

          <div className="text-[14px] flex py-3 flex-col gap-4 font-[400] text-[#858D9D] line-spacing-[20px]">
            <p>{streetName}</p>
            <p>{address}</p>
            <span>{number}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Store;
