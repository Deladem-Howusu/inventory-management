import Chart from "../Component/Chart";
import LineChart from "../Component/LineChart";
import LowQuantity from "../Component/LowQuantity";
import PurchaseCard from "../Component/PurchaseCard";
import Summary from "../Component/Purchasesummary";
import SellingProduct from "../Component/SellingProduct";
import OverviewCard from "./../Component/OverviewCards";
function DashboardContent() {
  return (
    <div className="content overflow-y-scroll">
      <div className="">
        <OverviewCard title={"Sales overview"} />
        <PurchaseCard title={"Purchase overview"} />
        <Chart />
        <SellingProduct />
      </div>
      <div>
        <Summary
          title={"Inventory Summary"}
          number={"86"}
          description={"Quantity in Hand"}
          img={"/Quantity.png"}
          image={"/On the way.png"}
          Quantity={"200"}
          detail={"To be received"}
          margin={"mt-6"}
        />
        <Summary
          title={"Product Summary"}
          number={"98"}
          description={"Number of suppliers"}
          img={"/Suppliers.png"}
          image={"/Categories.png"}
          Quantity={"451"}
          detail={"Number of categories"}
          margin={"mt-5"}
        />
        <LineChart />
        <LowQuantity />
      </div>
    </div>
  );
}
export default DashboardContent;
