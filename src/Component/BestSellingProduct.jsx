const bestSelling = [
  {
    Product: "Apple",
    id: 1,
    category: "Grocery",
    remaining: "50 Packets",
    turnover: "$10,000",
    increaseBy: 2.5,
    increase: true,
  },
  {
    Product: "Samsung Galaxy S21",
    id: 2,
    category: "Electronics",
    remaining: "30 Pieces",
    turnover: "$8,000",
    increaseBy: 1.5,
    increase: false,
  },
  {
    Product: "Nike Air",
    id: 3,
    category: "Clothing",
    remaining: "20 Pieces",
    turnover: "$6,500",
    increaseBy: 3.0,
    increase: true,
  },
  //   { category: "Home & Kitchen", turnover: "$5,200", increaseBy: 2.0, increase: false },
];

function BestSellingProduct() {
  return (
    <div className="bg-white my-10 w-full rounded-[10px] best-selling-product">
      <div className="flex justify-between py-8 px-5 items-center ">
        <h1 className="text-[#383E49] font-medium text-[18px]">
          Best Selling Product
        </h1>
        <p className="text-[#0F50AA] text-[14px]"> See All </p>
      </div>

      <table className="w-full   ">
        <thead>
          <tr>
            <th>Product</th>
            <th>Product ID</th>
            <th>Category</th>
            <th>Remaining Quantity</th>
            <th>Turn over</th>
            <th>Increase By</th>
          </tr>
        </thead>

        {/* There should be a fix here */}

        <tbody>
          {bestSelling.map((item, index) => (
            <tr className="not-last:border-b border-[#f0f1f3]" key={index}>
              <td>{item.Product}</td>
              <td>{item.id}</td>
              <td>{item.category}</td>
              <td>{item.remaining}</td>
              <td>{item.turnover}</td>

              <td style={{ color: item.increase ? "#16A34A" : "#DC2626" }}>
                {item.increase ? "+" : "-"}
                {item.increaseBy}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BestSellingProduct;
