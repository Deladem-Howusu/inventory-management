import Button from "./button";
import Form from "./form";

const formlabel = [
  "Product Name",
  "Product ID",
  "Category",
  "Buying Price",
  "Quantity",
  "Unit",
  "Expiry Date",
  "Threshold Value",
];

function ProductModal({ setOpen }) {
  return (
    <div className="modal p-6 rounded-[8px] bg-white h-auto w-[500px]">
      <h1 className="text-[20px] font-semibold text-[#383E49]">New Product</h1>
      <div className="flex justify-center  items-center gap-5 py-6 pl-15 mt-4">
        <div
          style={{
            border: "2px dashed #9D9D9D",
            borderRadius: "8px",
            // padding: "32px",
            textAlign: "center",
            cursor: "pointer",
            width: "45px",
            height: "45px",
          }}
          // onClick={() => document.getElementById("product-image-input").click()}
          // onDragOver={(e) => e.preventDefault()}
          // onDrop={(e) => {
          //   e.preventDefault();
          //   const file = e.dataTransfer.files[0];
          //   if (file) {
          //     // handle file upload here
          //   }
          // }}
        ></div>
        <div>
          <p className="text-[#858D9D] text-[12px]">Drop image here</p>
          <input
            type="file"
            style={{ display: "" }}
            className="text-[#858D9D] text-[12px] underline cursor-pointer"
            //   id="product-image-input"
            //   accept="image/*"
            //   onChange={(e) => {
            //     const file = e.target.files[0];
            //     if (file) {
            //       // handle file upload here
            //     }
            //   }}
          />
        </div>
      </div>
      <Form formlabel={formlabel} />
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
export default ProductModal;
