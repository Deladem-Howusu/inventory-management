import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function ProfitRevenueChart() {
  return (
    <div className="w-full h-fit  bg-white rounded-[10px] mt-8 p-5 profit-revenue-chart">
      <div className="flex justify-between py-5 px-5 items-center ">
        <h1 className="text-[#383E49] font-medium text-[18px]">
          Profit & Revenue
        </h1>
        <input className=" text-[14px]" type="week" />
      </div>
      <div>
        <Line
          data={{
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                label: "Profit",
                data: [4000, 4500, 3000, 5000, 5000, 6000],
                borderColor: "#dba362f6",
                backgroundColor: "#DBA36247",
                tension: 0.4,
                borderWidth: 1,
                fill: true,
                order: 1,
                zIndex: 20,
              },
              {
                label: "Revenue",
                data: [3000, 6000, 4000, 7000, 400, 2000],
                borderColor: "rgba(153, 102, 255, 1)",
                backgroundColor: "#fbfbfbbc",
                tension: 0.4,
                borderWidth: 1,
                fill: true,
                zIndex: 10,
              },
            ],
          }}
          options={{
            responsive: true,
            plugins: {
              legend: { position: "bottom" },
              title: { display: false, text: "Profit and Revenue Over Time" },
            },
          }}
        />
      </div>
    </div>
  );
}

export default ProfitRevenueChart;
