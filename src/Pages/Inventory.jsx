import InventoryTable from "../Component/inventorytable";
import Card from "./../Component/InventoryCard";
import OverallSummaryCard from "../Component/OverallInventory";
function Inventory() {
  return (
    <div className="px-[32px] pt-[32px] bg-[#F5F5F5] overflow-y-scroll ">
      <Card head={"Overall Inventory"} type={"Categories"} value={14}>
        <OverallSummaryCard
          title={"Total Expense"}
          color={"#E19133"}
          quantity={80}
          amount={"$ 500"}
          description={"Revenue"}
          timeperiod={"Last 7 days"}
        />
        <OverallSummaryCard
          color={"#845EBC"}
          title={"Total Cost"}
          quantity={80}
          amount={"$ 40"}
          description={"Cost"}
          timeperiod={"Last 7 days"}
        />
        <OverallSummaryCard
          color={"#F36960"}
          title={"Low stocks"}
          quantity={12}
          amount={4}
          description={"Not in stock"}
          timeperiod={"Ordered"}
        />
      </Card>
      <InventoryTable />
    </div>
  );
}

export default Inventory;
