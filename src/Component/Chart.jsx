import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const Chart = () => {
  return (
    <div className="mt-5 ml-8 w-[40rem] h-[25rem] mb-4 bg-white py-5 px-10 rounded-[15px] shadow">
      <div className="flex justify-between pb-8">
        <h1 className="text-[#383E49] font-medium text-[20px]">
          Sales and Purchase
        </h1>
        <input type="week" className="text-[#383E49] font-medium text-[16px]" />
      </div>
      <Bar
        data={{
          labels: ["A", "B", "C", "D", "E", "F", "G", "H"],
          datasets: [
            {
              label: "Revenue",
              data: [200, 300, 400, 500, 310, 150, 200, 250],
              backgroundColor: "#0c86f7",
              borderRadius: 6,
              barPercentage: 0.4,
              categoryPercentage: 0.6,
            },
            {
              label: "Revenue",
              data: [100, 50, 500, 150, 400, 230, 310, 211],
              backgroundColor: "#b8f70c",
              borderRadius: 6,
              barPercentage: 0.4,
              categoryPercentage: 0.6,
            },
          ],
        }}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: "bottom",
              title: { display: true, text: "Revenue for Categories" },
            },
          },
        }}
      />
    </div>
  );
};

export default Chart;
