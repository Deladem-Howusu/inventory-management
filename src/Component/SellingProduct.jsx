function SellingProduct() {
  return (
    <div className="bg-white ml-8 w-full shadow rounded-[10px]">
      <div className="flex justify-between py-5 px-5 items-center ">
        <h1 className="text-[#383E49] font-medium text-[18px]">
          Top Selling Stock
        </h1>
        <p className="text-[#0F50AA] text-[14px]"> See All </p>
      </div>
      <table className="w-full   mb-10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Sold Quantity</th>
            <th>Remaining Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Surf Excel</td>
            <td>30</td>
            <td>12</td>
            <td>$20.5</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SellingProduct;
