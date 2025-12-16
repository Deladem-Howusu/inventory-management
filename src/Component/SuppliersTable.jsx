import { AlignStartHorizontal } from "lucide-react";
import Button from "./button";
import Pagination from "./Pagination";
import { useState } from "react";
import ProductModal from "./ProductModal";
import Overlay from "./overlay";
import Suppliers from "./../Pages/Suppliers";
import SupplierModal from "./Supplierform";

const suppliersData = [
  {
    supplierName: "Timothy Lee",
    product: "Product 1",
    contactNumber: "123-456-7890",
    email: "suppliera@example.com",
    type: "Taking return",
    onTheWay: 30,
  },
  {
    supplierName: "John Doe",
    product: "Product 2",
    contactNumber: "234-567-8901",
    email: "supplierb@example.com",
    type: "Not taking return",
    onTheWay: 12,
  },
  {
    supplierName: "Newton Smith",
    product: "Product 3",
    contactNumber: "345-678-9012",
    email: "supplierc@example.com",
    type: "Taking return",
    onTheWay: 50,
  },
  {
    supplierName: "Esther Howard",
    product: "Product 4",
    contactNumber: "456-789-0123",
    email: "supplierd@example.com",
    type: "Not taking return",
    onTheWay: 0,
  },
  {
    supplierName: "Cameron Williamson",
    product: "Product 5",
    contactNumber: "567-890-1234",
    email: "suppliere@example.com",
    type: "Taking return",
    onTheWay: 5,
  },
  {
    supplierName: "Albert Flores",
    product: "Product 6",
    contactNumber: "678-901-2345",
    email: "supplierf@example.com",
    type: "Not taking return",
    onTheWay: "No",
  },
  {
    supplierName: "Jenny Wilson",
    product: "Product 7",
    contactNumber: "789-012-3456",
    email: "supplierg@example.com",
    type: "Taking return",
    onTheWay: 30,
  },
  {
    supplierName: "Kristin Watson",
    product: "Product 8",
    contactNumber: "890-123-4567",
    email: "supplierh@example.com",
    type: "Not taking return",
    onTheWay: "No",
  },
];

function SuppliersTable() {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`w-full  px-6  flex flex-col rounded-[8px] bg-white h-auto py-6 suppliers-table `}
    >
      <div className="py-5 flex justify-between items-center">
        <h1 className="text-[20px] font-medium mb-4 header1">Supplier</h1>
        <div className="flex gap-4">
          <Button
            label="Add Supplier"
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
            <th>Supplier Name</th>
            <th>Product</th>
            <th>Contact Number</th>
            <th>Email</th>
            <th>Type</th>
            <th>On the way</th>
          </tr>
        </thead>
        <tbody>
          {suppliersData.map((item, index) => (
            <tr key={index} className="not-last:border-b border-[#f0f1f3]">
              <td>{item.supplierName}</td>
              <td>{item.product}</td>
              <td>{item.contactNumber}</td>
              <td>{item.email}</td>
              <td
                style={{
                  color: item.type === "Taking return" ? "#22c55e" : "#ef4444",
                }}
              >
                {item.type}
              </td>
              <td>{typeof item.onTheWay === "number" ? item.onTheWay : "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination />
      {open && <SupplierModal open={open} setOpen={setOpen} />}
      {open && <Overlay />}
    </div>
  );
}

export default SuppliersTable;
