import "./dashboard.css";
import { GiTheater } from "react-icons/gi";
import { SiBookstack } from "react-icons/si";
import { BiCameraMovie } from "react-icons/bi";
import { BsMusicNoteList } from "react-icons/bs";
import { PiTelevisionBold } from "react-icons/pi";
import { GrGamepad } from "react-icons/gr";
import { FaComputer } from "react-icons/fa6";
import { TbMathSymbols } from "react-icons/tb";
import { MdScience } from "react-icons/md";
import { MdOutlineSportsSoccer } from "react-icons/md";
import { MdOutlineHistoryEdu } from "react-icons/md";
import { FaLandmarkFlag } from "react-icons/fa6";
import { TbCarSuv } from "react-icons/tb";
import { MdOutlineSmartToy } from "react-icons/md";
import { SiEngadget } from "react-icons/si";
import { CgProfile } from "react-icons/cg";
import { RiAccountCircleLine } from "react-icons/ri";
import { TbLogout } from "react-icons/tb";
import { CiCircleRemove } from "react-icons/ci";

const DashBoard = () => {
  return (
    <div className="dashboard bg-gray-300">
      <div className="header w-[100%] h-[6rem] bg-indigo-950 flex justify-between items-center ">
        <div className="w-[50rem] flex justify-start items-center self-stretch gap-20">
          <div className="bg-quizLogo w-[5rem] h-[100%] ml-10 bg-contain bg-center bg-no-repeat"></div>
          <div className="home">
            <h1 className="text-white text-[1.3rem] font-bold ">HOME</h1>
          </div>
          <div className="home">
            <h1 className="text-gray-400 text-[1.3rem] font-bold ">RECORDS</h1>
          </div>
          <div className="home">
            <h1 className="text-gray-400 text-[1.3rem] font-bold">
              LEADERBOARD
            </h1>
          </div>
        </div>

        <div className=" ">
          <CgProfile className="text-[3rem] mr-11 text-zinc-50" />
        </div>

        <div className="popup w-[25rem] h-[13rem] bg-slate-400 absolute top-[5rem] right-[2.8rem] rounded-xl px-8 z-10">
          <div className="w-full flex justify-between items-center border-b-[1px] py-4">
            <RiAccountCircleLine className="text-[3rem]" />
            <div className="text-[1.3rem] font-bold flex flex-col">
              <div className=" text-[3.5rem] absolute top-[-3.7rem] right-[-0.3rem]">
                <CiCircleRemove className="flex justify-end bg-indigo-950 text-zinc-50 rounded-full" />
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
      <div className="text-[2rem] font-bold mt-10">
        <h1 className="flex justify-center items-center italic hover:not-italic">
          Select a Category
        </h1>
      </div>

      <div className="category-list">
        <div className="flex-box">
          <div className="flex-item flex-item-1 text-[20px] font-bold italic hover:not-italic">
            Musical Theaters
            <div className="category-img">
              <GiTheater className="text-[2rem]" />
            </div>
          </div>
          <div className="flex-item flex-item-2 text-[20px] font-bold italic hover:not-italic">
            Books
            <div className="category-img">
              <SiBookstack className="text-[2rem]" />{" "}
            </div>
          </div>
          <div className="flex-item flex-item-3 text-[20px] font-bold italic hover:not-italic">
            Flims
            <div className="category-img">
              <BiCameraMovie className="text-[2rem]" />
            </div>
          </div>
          <div className="flex-item flex-item-4 text-[20px] font-bold italic hover:not-italic">
            Music
            <div className="category-img">
              <BsMusicNoteList className="text-[2rem]" />
            </div>
          </div>
          <div className="flex-item flex-item-5 text-[20px] font-bold italic hover:not-italic">
            Television
            <div className="category-img">
              <PiTelevisionBold className="text-[2rem]" />
            </div>
          </div>
          <div className="flex-item flex-item-6 text-[20px] font-bold italic hover:not-italic">
            Video Games
            <div className="category-img">
              <GrGamepad className="text-[2rem]" />
            </div>
          </div>
          <div className="flex-item flex-item-7 text-[20px] font-bold italic hover:not-italic">
            Computers
            <div className="category-img">
              <FaComputer className="text-[2rem]" />
            </div>
          </div>
          <div className="flex-item flex-item-8 text-[20px] font-bold italic hover:not-italic">
            Mathematics
            <div className="category-img">
              <TbMathSymbols className="text-[2rem]" />
            </div>
          </div>
          <div className="flex-item flex-item-9 text-[20px] font-bold italic hover:not-italic">
            Science
            <div className="category-img">
              <MdScience className="text-[2rem]" />
            </div>
          </div>
          <div className="flex-item flex-item-10 text-[20px] font-bold italic hover:not-italic">
            Sports
            <div className="category-img">
              <MdOutlineSportsSoccer className="text-[2rem]" />
            </div>
          </div>
          <div className="flex-item flex-item-11 text-[20px] font-bold italic hover:not-italic">
            History
            <div className="category-img">
              <MdOutlineHistoryEdu className="text-[2rem]" />
            </div>
          </div>
          <div className="flex-item flex-item-12 text-[20px] font-bold italic hover:not-italic">
            Politics
            <div className="category-img">
              <FaLandmarkFlag className="text-[2rem]" />
            </div>
          </div>
          <div className="flex-item flex-item-13 text-[20px] font-bold italic hover:not-italic">
            Vehicles
            <div className="category-img">
              <TbCarSuv className="text-[2rem]" />
            </div>
          </div>
          <div className="flex-item flex-item-14 text-[20px] font-bold italic hover:not-italic">
            Cartoon
            <div className="category-img">
              <MdOutlineSmartToy className="text-[2rem]" />
            </div>
          </div>
          <div className="flex-item flex-item-15 text-[20px] font-bold italic hover:not-italic">
            Gadgets
            <div className="category-img">
              <SiEngadget className="text-[2rem]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
