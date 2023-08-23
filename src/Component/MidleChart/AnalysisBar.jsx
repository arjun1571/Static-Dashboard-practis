import { FaShare } from "react-icons/fa";
import ProgressBar from "@ramonak/react-progress-bar";
const AnalysisBar = () => {
  return (
    <div className="flex justify-between">
      <div className="w-1/2">
        <div className="flex justify-between ">
          <h1 className="text-xl font-bold">Analysis</h1>
          <div>
            <button className="border px-4">month</button>
            <button className="border px-4 bg-blue-700 text-white mx-2">
              year
            </button>
          </div>
        </div>
        <div className="flex mt-5">
          <div className="w-1/2 border p-8 rounded-xl shadow-xl">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur,
              quo? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Debitis non consectetur voluptatem numquam iusto delectus
              voluptatibus maiores aspernatur obcaecati placeat?{" "}
            </p>

            <div className="flex items-center justify-center mt-5">
              <h1 className="text-4xl">100</h1>
              <div className="bg-blue-700 text-white p-4 rounded-xl mx-4">
                <FaShare></FaShare>
              </div>
            </div>
          </div>
          <div className="rounded-2xl mx-5  ">
            <ProgressBar completed={80} className="w-80 mt-4 h-8" />
            <ProgressBar completed={20} className="w-80 mt-4 h-8" />
            <ProgressBar completed={50} className="w-80 mt-4 h-8" />
            <ProgressBar completed={70} className="w-80 mt-4 h-8" />
            <ProgressBar completed={90} className="w-80 mt-4 h-8" />
            <ProgressBar completed={50} className="w-80 mt-4 h-8" />
            <ProgressBar completed={70} className="w-80 mt-4 h-8" />
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between ">
          <h1 className="text-xl font-bold">Analysis</h1>
          <div>
            <button className="border px-4">month</button>
            <button className="border px-4 bg-blue-700 text-white mx-2">
              year
            </button>
          </div>
        </div>
        {/* table  */}
        <div>
          <div className="mx-5 mt-5">
            <table className="table-auto">
              <thead>
                <tr>
                  <th className="px-4 py-2">Dhart</th>
                  <th className="px-4 py-2">Child</th>
                  <th className="px-4 py-2">Time</th>
                  <th className="px-4 py-2">Demo</th>
                  <th className="px-4 py-2">Demo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">Intro</td>
                  <td className="border px-4 py-2">Adam</td>
                  <td className="border px-4 py-2">858</td>
                  <td className="border px-4 py-2">858</td>
                  <td className="border px-4 py-2">858</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="border px-4 py-2">Demo</td>
                  <td className="border px-4 py-2">Adam</td>
                  <td className="border px-4 py-2">112</td>
                  <td className="border px-4 py-2">112</td>
                  <td className="border px-4 py-2">112</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Intro</td>
                  <td className="border px-4 py-2">Chris</td>
                  <td className="border px-4 py-2">1,280</td>
                  <td className="border px-4 py-2">1,280</td>
                  <td className="border px-4 py-2">1,280</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisBar;
