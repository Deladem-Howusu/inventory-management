import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  Legend,
  Tooltip,
  LineElement,
  PointElement,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Title,
  Filler
);

function LineChart() {
  return (
    <div className="mt-5 ml-5 w-[25rem] px-5 bg-white py-2 h-[20rem] rounded-[15px] shadow">
      <Line
        data={{
          labels: ["A", "B", "C", "D", "E", "F", "G", "H"],
          datasets: [
            {
              label: "Graph",
              data: [23, 45, 30, 50, 40, 40, 50, 30],
              tension: 0.4,
              fill: true,
              backgroundColor: "rgba(99, 102, 255, 0.103)",
              pointBackgroundColor: "#fcf7f8",
              pointRadius: 2,
              borderWidth: 1,
              pointBorderWidth: 0.5,
            },
            {
              label: "Graph",
              data: [45, 40, 50, 40, 30, 60, 50, 40],
              tension: 0.4,
              fill: false,
              backgroundColor: "rgb(9, 245, 1)",
              borderColor: "#04fc25",
              borderWidth: 1,
              pointBorderWidth: 0.5,
              pointRadius: 1,
            },
          ],
        }}
        options={{
          responsive: true,
          plugins: {
            legend: { position: "bottom" },
            title: { display: true, text: "Revenue vs Cost (Line Chart)" },
          },
        }}
        height={500}
        width={600}
      />
    </div>
  );
}

export default LineChart;
