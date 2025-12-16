import Cardpoint from "./cardpoint";

function OverviewCard({ title }) {
  return (
    <div className="card bg-white mt-6 ml-8 pl-2 pb-5 py-2 rounded-[10px] w-[40rem] flex flex-col gap-5">
      <h1 className="text-[18px] font-medium text-[#5a606b] ">{title}</h1>
      <div className="flex">
        <Cardpoint
          img={"/Sales.png"}
          amount={"$400"}
          point={"Sales"}
          border={true}
        />
        <Cardpoint
          img={"/Revenue.png"}
          amount={"$400"}
          point={"Revenue"}
          border={true}
        />
        <Cardpoint
          img={"/Profit.png"}
          amount={"$400"}
          point={"Profit"}
          border={true}
        />
        <Cardpoint
          img={"/Group 24.png"}
          amount={"$400"}
          point={"Cost"}
          border={false}
        />
      </div>
    </div>
  );
}
export default OverviewCard;
