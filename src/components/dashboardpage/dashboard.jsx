import "./dashboard.css";

const DashBoard = () => {
  return (
    <div className="dashboard">
      <div className="heading">
        <h1>TAKE BY QUIZ</h1>
      </div>
      <div className="category-list">
        <div className="flex-box">
          <div className="flex-item flex-item-1">
            Algorithms
            <div className="category-img">
              <img
                src="src/components/dashboardpage/img/Algorithm.svg"
                alt=""
                className="algorithm-image"
              />
            </div>
          </div>
          <div className="flex-item flex-item-2">
            Data Structures
            <div className="category-img">
              <img
                src="src/components/dashboardpage/img/DataStructure.svg"
                alt=""
                className="datastructure-img"
              />
            </div>
          </div>
          <div className="flex-item flex-item-3">
            Mathematics
            <div className="category-img">
              <img
                src="src/components/dashboardpage/img/Mathematics.svg"
                alt=""
                className="Mathematics-img"
              />
            </div>
          </div>
          <div className="flex-item flex-item-4">
            Artificial Intelligence
            <img src="src/components/dashboardpage/img/AI.svg" alt="" />
          </div>
          <div className="flex-item flex-item-5">
            C
            <img src="src/components/dashboardpage/img/C.svg" alt="" />
          </div>
          <div className="flex-item flex-item-6">
            C++
            <img src="src/components/dashboardpage/img/C++.svg" alt="" />
          </div>
          <div className="flex-item flex-item-7">
            Java
            <img src="src/components/dashboardpage/img/Java.svg" alt="" />
          </div>
          <div className="flex-item flex-item-8">
            Python
            <img src="src/components/dashboardpage/img/Python.svg" alt="" />
          </div>
          <div className="flex-item flex-item-9">
            Ruby
            <img src="src/components/dashboardpage/img/Ruby.svg" alt="" />
          </div>
          <div className="flex-item flex-item-10">
            SQL
            <img src="src/components/dashboardpage/img/SQL.svg" alt="" />
          </div>
          <div className="flex-item flex-item-11">
            Databases
            <img src="src/components/dashboardpage/img/DataBase.svg" alt="" />
          </div>
          <div className="flex-item flex-item-11">
            Linux Shell
            <img src="src/components/dashboardpage/img/LinuxShell.svg" alt="" />
          </div>
          <div className="flex-item flex-item-11">
            Functional Programming
            <img
              src="src/components/dashboardpage/img/FunctionalProgramming.svg"
              alt=""
            />
          </div>
          <div className="flex-item flex-item-11">
            Regex
            <img src="src/components/dashboardpage/img/Regex.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
