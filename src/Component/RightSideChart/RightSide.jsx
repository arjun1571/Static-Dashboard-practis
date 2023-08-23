import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import LoadChart from "./LoadChart";
import RightPieChart from "./RightPieChart";

const RightSide = () => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
  ];
  return (
    <div className="mt-28">
      <h1>Daily Charts</h1>
      {/* bar chart use on rihgt side  */}
      <div>
        <BarChart width={400} height={250} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
          <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
          <Tooltip />
          <Legend />
          <Bar yAxisId="left" dataKey="pv" fill="#8884d8" />
          <Bar yAxisId="right" dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </div>
      {/* right side table  */}
      <div className="mx-5">
        <table className="table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">Dhart</th>
              <th className="px-4 py-2">Child</th>
              <th className="px-4 py-2">Time</th>
              <th className="px-4 py-2">Demo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Intro</td>
              <td className="border px-4 py-2">Adam</td>
              <td className="border px-4 py-2">858</td>
              <td className="border px-4 py-2">858</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border px-4 py-2">Demo</td>
              <td className="border px-4 py-2">Adam</td>
              <td className="border px-4 py-2">112</td>
              <td className="border px-4 py-2">112</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Intro</td>
              <td className="border px-4 py-2">Chris</td>
              <td className="border px-4 py-2">1,280</td>
              <td className="border px-4 py-2">1,280</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* type of load section here  */}
      <div className="mx-5 mt-5">
        <LoadChart></LoadChart>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-bold text-xl">Activity</h1>
          </div>
          <div className="mt-5">
            <div>
              <button className="border px-2 items-center ">month</button>
              <button className="border px-2 mx-2">Day</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <RightPieChart></RightPieChart>
      </div>
    </div>
  );
};

export default RightSide;
