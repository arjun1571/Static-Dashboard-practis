import { FaDelicious } from "react-icons/fa";
import AnalysisCart from "./AnalysisCart";
import Chart from "./Chart";
import AnalysisBar from "./AnalysisBar";

const Midle = () => {
  return (
    <div className="p-5 py-5">
      {/* heading and search box component here  */}
      <div className="flex">
        <div className="flex items-center ">
          <FaDelicious className="text-4xl"></FaDelicious>
          <div className="mx-4">
            <h1 className="text-2xl font-bold">Dashbord</h1>
            <p>March 11,THU</p>
          </div>
        </div>
        <div className="mx-10">
          <input
            type="search"
            placeholder="Search "
            className="border rounded  p-2"
          />
          <input
            type="submit"
            className="border bg-black text-white p-2 rounded"
          ></input>
        </div>
      </div>
      {/* analysis cart section here  */}
      <div className="mt-10 flex">
        <AnalysisCart></AnalysisCart>
        <AnalysisCart></AnalysisCart>
        <AnalysisCart></AnalysisCart>
        <AnalysisCart></AnalysisCart>


      </div>
      {/* react chart on this section  */}
      <div className="mt-20 px-5">
        <Chart></Chart>
      </div>
      {/* analysis bar section here  */}
      <div className="py-20 px-5 ">
          <AnalysisBar></AnalysisBar>
      </div>
    </div>
  );
};

export default Midle;
