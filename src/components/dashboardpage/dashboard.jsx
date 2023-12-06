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

const DashBoard = () => {
  return (
    <div className="dashboard">
      <div className="header w-[100%] h-[6rem] bg-indigo-950 flex justify-start items-center gap-4">
        <div className="bg-quizLogo w-[8rem] h-[100%] bg-contain bg-center bg-no-repeat"></div>
        <div className="">
          <h1 className="text-gray-50 text-[1.1rem]">Home</h1>
        </div>
      </div>
      <div className="category-list">
        <div className="flex-box">
          <div className="flex-item flex-item-1 text-[20px] font-bold">
            Musical Theaters
            <div className="category-img">
              <GiTheater className="text-[2rem]" />
            </div>
          </div>
          <div className="flex-item flex-item-2 text-[20px] font-bold">
            Books
            <div className="category-img">
              <SiBookstack className="text-[2rem]" />{" "}
            </div>
          </div>
          <div className="flex-item flex-item-3 text-[20px] font-bold">
            Flims
            <div className="category-img">
              <BiCameraMovie className="text-[2rem]" />
            </div>
          </div>
          <div className="flex-item flex-item-4 text-[20px] font-bold">
            Music
            <div className="category-img">
              <BsMusicNoteList className="text-[2rem]" />
            </div>
          </div>
          <div className="flex-item flex-item-5 text-[20px] font-bold">
            Television
            <div className="category-img">
              <PiTelevisionBold className="text-[2rem]" />
            </div>
          </div>
          <div className="flex-item flex-item-6 text-[20px] font-bold">
            Video Games
            <div className="category-img">
              <GrGamepad className="text-[2rem]" />
            </div>
          </div>
          <div className="flex-item flex-item-7 text-[20px] font-bold">
            Computers
            <div className="category-img">
              <FaComputer className="text-[2rem]" />
            </div>
          </div>
          <div className="flex-item flex-item-8 text-[20px] font-bold">
            Mathematics
            <div className="category-img">
              <TbMathSymbols className="text-[2rem]" />
            </div>
          </div>
          <div className="flex-item flex-item-9 text-[20px] font-bold">
            Science
            <div className="category-img">
              <MdScience className="text-[2rem]" />
            </div>
          </div>
          <div className="flex-item flex-item-10 text-[20px] font-bold">
            Sports
            <div className="category-img">
              <MdOutlineSportsSoccer className="text-[2rem]" />
            </div>
          </div>
          <div className="flex-item flex-item-11 text-[20px] font-bold">
            History
            <div className="category-img">
              <MdOutlineHistoryEdu className="text-[2rem]" />
            </div>
          </div>
          <div className="flex-item flex-item-12 text-[20px] font-bold">
            Politics
            <div className="category-img">
              <FaLandmarkFlag className="text-[2rem]" />
            </div>
          </div>
          <div className="flex-item flex-item-13 text-[20px] font-bold">
            Vehicles
            <div className="category-img">
              <TbCarSuv className="text-[2rem]" />
            </div>
          </div>
          <div className="flex-item flex-item-14 text-[20px] font-bold">
            Cartoon
            <div className="category-img">
              <MdOutlineSmartToy className="text-[2rem]" />
            </div>
          </div>
          <div className="flex-item flex-item-15 text-[20px] font-bold">
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
