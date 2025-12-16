import Cardpoint from "./cardpoint";

function PurchaseCard({ title }) {
  return (
    <div className="card bg-white mt-5 ml-8 pl-2 pb-5 py-2 rounded-[10px] w-[40rem] flex flex-col gap-5">
      <h1 className="text-[18px] font-medium text-[#5a606b] ">{title}</h1>
      <div className="flex">
        <Cardpoint
          img={"/Purchase.png"}
          amount={"8"}
          point={"Purchase"}
          border={true}
        />
        <Cardpoint
          img={"/Group 24.png"}
          amount={"$400"}
          point={"Cost"}
          border={true}
        />
        <Cardpoint
          img={"/Cancel.png"}
          amount={"$400"}
          point={"Cancel"}
          border={true}
        />
        <Cardpoint
          img={"/Profit.png"}
          amount={"$400"}
          point={"Return"}
          border={false}
        />
      </div>
    </div>
  );
}
export default PurchaseCard;
