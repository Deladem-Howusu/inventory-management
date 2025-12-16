import BestSelling from "../Component/BestSellingCategory";
import BestSellingProduct from "../Component/BestSellingProduct";
import ProfitRevenueChart from "../Component/ProfitRevenueChart";
import ReportOverview from "../Component/Reportoverview";

function Report() {
  return (
    <div className="py-4 pr-10 pl-4 w-full report overflow-y-scroll">
      <ReportOverview />
      <BestSelling />
      <ProfitRevenueChart />
      <BestSellingProduct />
    </div>
  );
}

export default Report;
