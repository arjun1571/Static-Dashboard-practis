import { FaToggleOff } from "react-icons/fa";
import {

  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
  ResponsiveContainer,
} from 'recharts';

const Chart = () => {
    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 22400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 8398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 6800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 10908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 9800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 2200,
          amt: 2100,
        },
      ];
    return (
        <div >
            <div className="flex justify-between ">
                <h1 className="text-xl font-bold">Analysis</h1>
                <div>
                    <button className="border px-4">month</button>
                    <button className="border px-4 bg-blue-700 text-white mx-2">year</button>
                </div>
                <div className="flex items-center text-2xl">
                    <h1 className="mr-4">Daily Charts</h1>
                    <FaToggleOff className="text-4xl text-blue-600"></FaToggleOff>
                </div>
            </div>

            {/* chart use in React Recharts  */}
            <div className="mt-5">
            <ResponsiveContainer width="100%" height={200}>
          <AreaChart
            width={500}
            height={200}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="pv" stroke="#82ca9l" fill="#0000FF" />
          </AreaChart>
        </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Chart;