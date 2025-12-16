import { AlignStartHorizontal, Home } from "lucide-react";
import Button from "./button";
import Pagination from "./Pagination";
import { useState } from "react";
import ProductModal from "./ProductModal";
import Overlay from "./overlay";

const inventoryData = [
  {
    product: "Product 1",
    buyingPrice: "$10.00",
    quantity: 9,
    thresholdValue: 10,
    expiryDate: "2023-12-31",
    availability: "In Stock",
  }, // Add more products as needed
  {
    product: "Product 2",
    buyingPrice: "$25.00",
    quantity: 3,
    thresholdValue: 9,
    expiryDate: "2023-12-31",
    availability: "Out of Stock",
  }, // Add more products as needed
  {
    product: "Product 3",
    buyingPrice: "$55.00",
    quantity: 6,
    thresholdValue: 5,
    expiryDate: "2023-12-31",
    availability: "Low Stock",
  }, // Add more products as needed
  {
    product: "Product 4",
    buyingPrice: "$63.00",
    quantity: 6,
    thresholdValue: 7,
    expiryDate: "2023-12-31",
    availability: "In Stock",
  }, // Add more products as needed
];

function InventoryTable() {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full mt-8 px-6  flex flex-col rounded-[8px] bg-white h-auto ">
      <div className="py-5 flex justify-between items-center">
        <h1 className="text-[20px] font-medium mb-4 header1">Products</h1>
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
            label="Download all"
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
            <th>Buying Price</th>
            <th>Quantity</th>
            <th>Threshold value</th>
            <th>Expiry date</th>
            <th>Availability</th>
          </tr>
        </thead>
        <tbody>
          {inventoryData.map((item, index) => (
            <tr key={index}>
              <td>{item.product}</td>
              <td>{item.buyingPrice}</td>
              <td>{item.quantity}</td>
              <td>{item.thresholdValue} packets</td>
              <td>{item.expiryDate}</td>
              <td
                style={{
                  fontWeight: 600,
                  color:
                    item.availability === "In Stock"
                      ? "#22c55e"
                      : item.availability === "Low Stock"
                      ? "#eab308"
                      : "#ef4444",
                }}
              >
                {item.availability}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination />
      {open && <ProductModal open={open} setOpen={setOpen} />}
      {open && <Overlay />}
    </div>
  );
}

export default InventoryTable;
