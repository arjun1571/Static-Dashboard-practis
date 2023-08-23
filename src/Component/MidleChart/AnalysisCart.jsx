import { FaShare } from "react-icons/fa";

 

const AnalysisCart = () => {
    return (
        <div className="border w-72 mx-3 p-5 rounded-2xl shadow-2xl">
            <div className="flex justify-between ">
                <h1 className="text-xl font-bold">Analysis</h1>
                <div>
                    <button className="border px-4">month</button>
                    <button className="border px-4 bg-blue-700 text-white mx-2">year</button>
                </div>
            </div>
            <div className="flex mt-4">
            <div className="progress-round" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
            <progress value="75" min="0" max="100" style={{visibility:'hidden',height:0,width:0}}  >75%</progress>
            </div>
            
                {/* <h1 className="w-1/2 text-center my-auto text-4xl font-bold ">25% </h1> */}
                <p className="w-1/2 mx-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, itaque? lo</p>
            </div>
            <div className="flex items-center justify-center mt-5">
                <h1 className="text-4xl">100</h1>
                <div className="bg-blue-700 text-white p-4 rounded-xl mx-4">
                <FaShare></FaShare>
                </div>
            </div>
        </div>
    );
};

export default AnalysisCart;