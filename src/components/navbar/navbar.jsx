import { CgProfile } from "react-icons/cg";
import { RiAccountCircleLine } from "react-icons/ri";
import { TbLogout } from "react-icons/tb";
import { CiCircleRemove } from "react-icons/ci";
import "../navbar/navbar.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full h-[6rem] flex justify-between items-center bg-blue-950 shadow-lg shadow-indigo-500/50 ...">
      <div className="w-[50rem] flex justify-start items-center self-stretch gap-20">
        <div className="bg-quizLogo1 w-[5rem] h-[100%] ml-10 bg-contain bg-center bg-no-repeat"></div>
        <div className="home">
          <NavLink
            className="text-white text-[1.3rem] font-bold"
            to={"/components/dashboardpage"}
          >
            HOME
          </NavLink>
        </div>
        <div className="home">
          <NavLink
            className="text-gray-400 text-[1.3rem] font-bold"
            to={"/components/historypage"}
          >
            RECORDS
          </NavLink>
        </div>
        <div className="home">
          <NavLink
            className="text-gray-400 text-[1.3rem] font-bold"
            to={"/components/leaderboardpage"}
          >
            LEADERBOARD
          </NavLink>
        </div>
      </div>

      <div className="">
        <CgProfile
          className="text-[3rem] mr-11 text-zinc-50"
          onClick={() => setIsOpen(true)}
        />
      </div>

      <div
        className={`popup w-[25rem] h-[13rem] bg-slate-400 absolute top-[5rem] right-[2.8rem] rounded-xl px-8 z-10 ${
          isOpen ? "" : "hidden"
        }`}
      >
        <div className="w-full flex justify-between items-center border-b-[1px] py-4">
          <RiAccountCircleLine className="text-[3rem]" />
          <div className="text-[1.3rem] font-bold flex flex-col">
            <div className=" text-[3.5rem] absolute top-[-3.7rem] right-[-0.3rem]">
              <CiCircleRemove
                className="flex justify-end bg-indigo-950 text-zinc-50 rounded-full "
                onClick={() => setIsOpen(false)}
              />
            </div>
            <h1>USERNAME</h1>
            <h2>Gowtham7575@gmail.com</h2>
          </div>
        </div>
        <div className="w-full flex justify-start items-center border-b-[1px] py-4 gap-6">
          <TbLogout className="text-[3rem]" />
          <div className="text-[1.3rem] font-bold flex flex-col justify-center items-center">
            <h1>LOG OUT</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
