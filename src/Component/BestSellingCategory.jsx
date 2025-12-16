const bestSelling = [
  { category: "Grocery", turnover: "$10,000", increaseBy: 2.5, increase: true },
  {
    category: "Electronics",
    turnover: "$8,000",
    increaseBy: 1.5,
    increase: false,
  },
  { category: "Clothing", turnover: "$6,500", increaseBy: 3.0, increase: true },
  //   { category: "Home & Kitchen", turnover: "$5,200", increaseBy: 2.0, increase: false },
];

function BestSelling() {
  return (
    <div className="bg-white ml-6 w-full  rounded-[10px] best-selling-category">
      <div className="flex justify-between py-5 px-5 items-center ">
        <h1 className="text-[#383E49] font-medium text-[18px]">
          Best Selling Category
        </h1>
        <p className="text-[#0F50AA] text-[14px]"> See All </p>
      </div>

      <table className="w-full   ">
        <thead>
          <tr>
            <th>Category</th>
            <th>Turn over</th>
            <th>Increase By</th>
          </tr>
        </thead>

        {/* There should be a fix here */}

        <tbody>
          {bestSelling.map((item, index) => (
            <tr className="not-last:border-b border-[#f0f1f3]" key={index}>
              <td>{item.category}</td>
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

export default BestSelling;
