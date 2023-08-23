import LeftSide from "../LeftSideBord/LeftSide";
import Midle from "../MidleChart/Midle";
import RightSide from "../RightSideChart/RightSide";


const DashBord = () => {
    return (
        <div className="flex">
            <div className="w-[15%] bg-blue-200">
                {/* DashBord left side profile and navigation section  */}
                <LeftSide></LeftSide>
            </div>
            <div className="w-[70%]">
                {/* DashBord midle section chart component here  */}
                <Midle></Midle>
            </div>
            <div className="w-[25%]">
                <RightSide></RightSide>
            </div>

        </div>
    );
};

export default DashBord;