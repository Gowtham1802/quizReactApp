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

import { HistoryPage } from "../historypage/history";
import LeaderBoardPage from "../leaderboardpage/leaderboard";

const DashBoard = () => {
  return (
    <div className="dashboard bg-backgroundImg bg-cover bg-100% bg-no-repeat w-[100%] min-h-[100vh] overflow-x-hidden">
      {/* <HistoryPage></HistoryPage> */}
      {/* {<LeaderBoardPage></LeaderBoardPage>} */}
      <div className="text-[2rem] font-bold">
        <h1 className="flex justify-center items-center italic hover:not-italic">
          Select a Category
        </h1>
      </div>

      <div className="category-list">
        <div className="flex-box ">
          <div
            className="flex-item flex-item-1 text-[20px] font-bold italic hover:not-italic "
            id="music"
          >
            Musical Theaters
            <div className="category-img">
              <GiTheater className="text-[2rem]" />
              <div id="btn1">
                <input
                  type="button"
                  onclick="alert('Hello World!')"
                  value="Click Me!"
                />
              </div>
            </div>
          </div>

          <div
            className="flex-item flex-item-2 text-[20px] font-bold italic hover:not-italic"
            id="book"
          >
            Books
            <div className="category-img">
              <SiBookstack className="text-[2rem]" />
              <div id="btn1">
                <input
                  type="button"
                  onclick="alert('Hello World!')"
                  value="Click Me!"
                />
              </div>
            </div>
          </div>
          <div
            className="flex-item flex-item-3 text-[20px] font-bold italic hover:not-italic"
            id="flim"
          >
            Flims
            <div className="category-img">
              <BiCameraMovie className="text-[2rem]" />
              <div id="btn1">
                <input
                  type="button"
                  onclick="alert('Hello World!')"
                  value="Click Me!"
                />
              </div>
            </div>
          </div>
          <div
            className="flex-item flex-item-4 text-[20px] font-bold italic hover:not-italic"
            id="mic"
          >
            Music
            <div className="category-img">
              <BsMusicNoteList className="text-[2rem]" />
              <div id="btn1">
                <input
                  type="button"
                  onclick="alert('Hello World!')"
                  value="Click Me!"
                />
              </div>
            </div>
          </div>
          <div
            className="flex-item flex-item-5 text-[20px] font-bold italic hover:not-italic"
            id="tv"
          >
            Television
            <div className="category-img">
              <PiTelevisionBold className="text-[2rem]" />
              <div id="btn1">
                <input
                  type="button"
                  onclick="alert('Hello World!')"
                  value="Click Me!"
                />
              </div>
            </div>
          </div>
          <div
            className="flex-item flex-item-6 text-[20px] font-bold italic hover:not-italic"
            id="vg"
          >
            Video Games
            <div className="category-img">
              <GrGamepad className="text-[2rem]" />
              <div id="btn1">
                <input
                  type="button"
                  onclick="alert('Hello World!')"
                  value="Click Me!"
                />
              </div>
            </div>
          </div>
          <div
            className="flex-item flex-item-7 text-[20px] font-bold italic hover:not-italic"
            id="comp"
          >
            Computers
            <div className="category-img">
              <FaComputer className="text-[2rem]" />
              <div id="btn1">
                <input
                  type="button"
                  onclick="alert('Hello World!')"
                  value="Click Me!"
                />
              </div>
            </div>
          </div>
          <div
            className="flex-item flex-item-8 text-[20px] font-bold italic hover:not-italic"
            id="maths"
          >
            Mathematics
            <div className="category-img">
              <TbMathSymbols className="text-[2rem]" />
              <div id="btn1">
                <input
                  type="button"
                  onclick="alert('Hello World!')"
                  value="Click Me!"
                />
              </div>
            </div>
          </div>
          <div
            className="flex-item flex-item-9 text-[20px] font-bold italic hover:not-italic"
            id="science"
          >
            Science
            <div className="category-img">
              <MdScience className="text-[2rem]" />
              <div id="btn1">
                <input
                  type="button"
                  onclick="alert('Hello World!')"
                  value="Click Me!"
                />
              </div>
            </div>
          </div>
          <div
            className="flex-item flex-item-10 text-[20px] font-bold italic hover:not-italic"
            id="sports"
          >
            Sports
            <div className="category-img">
              <MdOutlineSportsSoccer className="text-[2rem]" />
              <div id="btn1">
                <input
                  type="button"
                  onclick="alert('Hello World!')"
                  value="Click Me!"
                />
              </div>
            </div>
          </div>
          <div
            className="flex-item flex-item-11 text-[20px] font-bold italic hover:not-italic"
            id="history"
          >
            History
            <div className="category-img">
              <MdOutlineHistoryEdu className="text-[2rem]" />
              <div id="btn1">
                <input
                  type="button"
                  onclick="alert('Hello World!')"
                  value="Click Me!"
                />
              </div>
            </div>
          </div>
          <div
            className="flex-item flex-item-12 text-[20px] font-bold italic hover:not-italic"
            id="politics"
          >
            Politics
            <div className="category-img">
              <FaLandmarkFlag className="text-[2rem]" />
              <div id="btn1">
                <input
                  type="button"
                  onclick="alert('Hello World!')"
                  value="Click Me!"
                />
              </div>
            </div>
          </div>
          <div
            className="flex-item flex-item-13 text-[20px] font-bold italic hover:not-italic"
            id="vehicle"
          >
            Vehicles
            <div className="category-img">
              <TbCarSuv className="text-[2rem]" />
              <div id="btn1">
                <input
                  type="button"
                  onclick="alert('Hello World!')"
                  value="Click Me!"
                />
              </div>
            </div>
          </div>
          <div
            className="flex-item flex-item-14 text-[20px] font-bold italic hover:not-italic"
            id="cartoon"
          >
            Cartoon
            <div className="category-img">
              <MdOutlineSmartToy className="text-[2rem]" />
              <div id="btn1">
                <input
                  type="button"
                  onclick="alert('Hello World!')"
                  value="Click Me!"
                />
              </div>
            </div>
          </div>
          <div
            className="flex-item flex-item-15 text-[20px] font-bold italic hover:not-italic"
            id="gadget"
          >
            Gadgets
            <div className="category-img">
              <SiEngadget className="text-[2rem]" />
              <div id="btn1">
                <input
                  type="button"
                  onclick="alert('Hello World!')"
                  value="Click Me!"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
