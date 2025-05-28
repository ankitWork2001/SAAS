import React, { useState, useEffect, Suspense } from "react";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register necessary chart components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

// Chart defaults
ChartJS.defaults.maintainAspectRatio = false;
ChartJS.defaults.responsive = true;
ChartJS.defaults.plugins.title.align = "start";
ChartJS.defaults.plugins.title.font = { size: 20 };
ChartJS.defaults.plugins.title.color = "black";

// Data & options
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const years = ['2023', '2024', '2025', '2026', '2027', '2028'];
const revenue = [1, 2, 3,34,34,45,45,23,12,323,2, 5, 3, 35, 23, 234, 345, 34543, 345, 3434];

const GraphTable = ({ yearVal = '2025', monthVal = 'Jan' }) => {
  const [year, setYear] = useState(yearVal);
  const [month, setMonth] = useState(monthVal);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    // If using real API:
    // const fetchData = async () => {
    //   try {
    //     const res = await fetch(`/api/data?year=${year}&month=${month}`);
    //     const result = await res.json();
    //     setData(result);
    //     setError("");
    //   } catch (err) {
    //     setError(err.message || "An error occurred");
    //   }
    // };
    // fetchData();

    // Static placeholder
    setData(revenue);
  }, [year, month]);

  return (
    <div className="p-1 m-2 flex flex-col">
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full py-2 align-middle">
          <div className="overflow-hidden border dark:border-white/10 rounded-lg">
            <div className="bg-sky-900 text-slate-50 border-b border-gray-500">
              <div className="p-0 m-1 flex justify-between items-center">
                <div className="p-1 m-2 font-semibold text-xl">Revenue over time</div>
                <div className="flex gap-2 items-center">
                  <select
                    className="bg-blue-500 text-slate-200 px-2 py-1 rounded"
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                  >
                    {months.map((m) => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                  <select
                    className="bg-blue-500 text-slate-200 px-2 py-1 rounded"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                  >
                    {years.map((y) => (
                      <option key={y} value={y}>{y}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="p-4">
                {error ? (
                  <div className="text-gray-400 text-center">Error: {error}</div>
                ) : (
                  <Suspense fallback={<Loading />}>
                    <ManualChart data={data} />
                  </Suspense>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ManualChart = ({ data }) => {
  return (
    <div className="text-white h-[400px]">
      <Line
        data={{
          labels: months,
          datasets: [
            {
              label: "Revenue",
              data: data,
              backgroundColor: "#064FF0",
              borderColor: "#064FF0",
              color: "white",
              fill: false,
            },
          ],
        }}
        options={{
          elements: {
            line: {
              tension: 0.5,
            },
          },
          plugins: {
            title: {
              display: true,
              text: "Monthly Revenue & Cost",
            },
          },
        }}
      />
    </div>
  );
};

const Loading = () => {
  return <div className="text-center text-gray-300">Loading...</div>;
};

export default GraphTable;
