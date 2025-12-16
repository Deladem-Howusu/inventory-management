import Card from "../Component/InventoryCard";
import OverallSummaryCard from "../Component/OverallInventory";
import OrdersTable from "../Component/OrdersTable";

function Orders() {
  return (
    <div className="px-[32px] pt-[32px] bg-[#F5F5F5] overflow-y-scroll ">
      <Card head={"Overall Orders"} type={"Total Orders"} value={37}>
        <OverallSummaryCard
          title={"Total Received"}
          color={"#E19133"}
          quantity={32}
          amount={"$ 25000"}
          description={"Revenue"}
          timeperiod={"Last 7 days"}
        />
        <OverallSummaryCard
          color={"#845EBC"}
          title={"Total Returned"}
          quantity={5}
          amount={"$ 2500"}
          description={"Cost"}
          timeperiod={"Last 7 days"}
        />
        <OverallSummaryCard
          color={"#F36960"}
          title={"On the way"}
          quantity={12}
          amount={"$ 2356"}
          description={"Cost"}
          timeperiod={"Ordered"}
        />
      </Card>
      <OrdersTable />
    </div>
  );
}
export default Orders;
