import { AlignStartHorizontal } from "lucide-react";
import Button from "./button";
import Pagination from "./Pagination";
import { useState } from "react";
import ProductModal from "./ProductModal";
import Overlay from "./overlay";
import Suppliers from "./../Pages/Suppliers";

import OrdersForm from "./OrdersForm";

const ordersData = [
  {
    Product: "Product 1",
    OrderValue: "$2500",
    quantity: "32",
    OrderId: "OD1234",
    expectDelivery: "11/12/2024",
    Status: "Delayed",
  },
  {
    Product: "Product 2",
    OrderValue: "$1500",
    quantity: "12",
    OrderId: "OD1235",
    expectDelivery: "15/12/2024",
    Status: "Confirmed",
  },
  {
    Product: "Product 3",
    OrderValue: "$3500",
    quantity: "22",
    OrderId: "OD1236",
    expectDelivery: "20/12/2024",
    Status: "Returned",
  },
  {
    Product: "Product 4",
    OrderValue: "$4000",
    quantity: "15",
    OrderId: "OD1237",
    expectDelivery: "25/12/2024",
    Status: "Out for delivery",
  },
];

function OrdersTable() {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full mt-8 px-6  flex flex-col rounded-[8px] bg-white h-auto py-6 suppliers-table ">
      <div className="py-5 flex justify-between items-center">
        <h1 className="text-[20px] font-medium mb-4 header1">Orders</h1>
        <div className="flex gap-4">
          <Button
            label="Add Product"
            onClick={() => setOpen(true)}
            backgroundColor={"#1366D9"}
            textColor={"#FFFFFF"}
          />
          <Button
            label="Filter"
            icon={<AlignStartHorizontal />}
            onClick={() => {}}
            backgroundColor={"none"}
            textColor={"#5D6679"}
          />
          <Button
            label="Order History"
            onClick={() => {}}
            backgroundColor={"none"}
            textColor={"#5D6679"}
          />
        </div>
      </div>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            <th>Product</th>
            <th>Order Value</th>
            <th>Quantity</th>
            <th>Order ID</th>
            <th>Expected Delivery</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {ordersData.map((item, index) => (
            <tr key={index} className="not-last:border-b border-[#f0f1f3]">
              <td>{item.Product}</td>
              <td>{item.OrderValue}</td>
              <td>{item.quantity}</td>
              <td>{item.OrderId}</td>
              <td>{item.expectDelivery}</td>
              <td
                style={{
                  color:
                    item.Status === "Delayed"
                      ? "#F79009"
                      : item.Status === "Confirmed"
                      ? "#1570EF"
                      : item.Status === "Out for delivery"
                      ? "#12B76A"
                      : "#667085",
                }}
              >
                {item.Status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination />
      {open && <OrdersForm open={open} setOpen={setOpen} />}
      {open && <Overlay />}
    </div>
  );
}

export default OrdersTable;
