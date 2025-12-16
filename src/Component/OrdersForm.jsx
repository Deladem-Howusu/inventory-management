import Button from "./button";
import Form from "./form";

const formlabel = [
  "Product Name",
  "Product ID",
  "Category",
  "Order Value",
  "Quantity",
  "Unit",
  "Buying Price",
  "Date of delivery",
];

function OrdersForm({ setOpen }) {
  return (
    <div className="modal p-6 rounded-[8px] bg-white h-auto w-[500px]">
      <h1 className="text-[20px] font-semibold m-4 mt-0 mb-5 text-[#383E49]">
        New Order
      </h1>
      <Form formlabel={formlabel} />
      {/* You can add additional children components or elements here if needed */}

      <div className="flex items-center mx-4 mt-8">
        <input type="checkbox" id="terms" className="mr-2" />
        <label
          htmlFor="terms"
          className="text-[14px] text-[#858D9D] font-normal"
        >
          Notify on the date of delivery
        </label>
      </div>

      <div className="flex justify-end gap-4 mt-10">
        <Button
          label="Discard"
          onClick={() => setOpen(false)}
          backgroundColor={"none"}
          textColor={"#5D6679"}
        />
        <Button
          label="Add Product"
          onClick={() => {}}
          backgroundColor={"blue"}
          textColor={"#FFFFFF"}
        />
      </div>
    </div>
  );
}

export default OrdersForm;
