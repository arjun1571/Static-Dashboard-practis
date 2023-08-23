import profile from "../../assets/profile.png";
import { FaDelicious, FaHome, FaPowerOff, FaUserAlt } from "react-icons/fa";
import { BsFillChatRightTextFill } from "react-icons/bs";
import { AiOutlineSetting } from "react-icons/ai";

const LeftSide = () => {
  return (
    <div className="">
      <img className="flex mx-auto mt-10 w-24" src={profile} alt="" />

      <div className="mt-10 justify-items-center">
        <div className="flex items-center text-2xl mx-5">
          <FaHome />
          <h1 className="mx-3">Home</h1>
        </div>
        <div className="flex items-center text-2xl mx-5 mt-3">
          <FaDelicious></FaDelicious>
          <h1 className="mx-3">Dashboard</h1>
        </div>
        <div className="flex items-center text-2xl mx-5 mt-3">
          <FaUserAlt />
          <h1 className="mx-3">Admin</h1>
        </div>
        <div className="flex items-center text-2xl mx-5 mt-3">
          <BsFillChatRightTextFill />
          <h1 className="mx-3">Message</h1>
        </div>
        <div className="flex items-center text-2xl mx-5 mt-3 ">
          <AiOutlineSetting />
          <h1 className="mx-3">Setting</h1>
        </div>
        <div className="flex items-center text-2xl mx-5 mt-96 py-10">
          <FaPowerOff className="" />
          <h1 className="mx-3">LogOut</h1>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
