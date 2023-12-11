// import Question from "./components/quizapp/questio";
// import Answer from "./components/quizapp/answer";
// import Login from "./components/loginpage/login";
// // import SignIn from "./components/loginpage/login";
// import SignIn from "./components/signinpage/signin";
// import DashBoard from "./components/dashboardpage/dashboard";
import HistoryPage from "./components/historypage/history";
// import "./App.css";
import data from "./data";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  // function
  const random = () => {
    return Math.trunc(Math.random() * 4);
  };

  const Box = () => {
    let answerBox = [...db[index].incorrect_answers];
    answerBox.splice(random(), 0, db[index].correct_answer);
    return answerBox;
  };

  // useState hooks
  const [db, setDb] = useState(data);
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(db[index].question);
  const [answer, setAnswer] = useState(Box());

  useEffect(() => {
    setQuestion(() => db[index].question);
    setAnswer(() => Box());
  }, [index]);

  // next btn
  const nextBtnHandler = () => {
    setIndex(() => index + 1);
  };

  // prev btn
  const prevBtnHandler = () => {
    setIndex(() => index - 1);
  };

  return (
    // <div
    //   id="page1"
    //   className="w-[100vw] min-h-screen flex flex-col justify-center items-center "
    // >
    //   <div
    //     id="box"
    //     className="w-[40rem] rounded-l-sm	 h-[25rem] flex flex-col justify-around items-center shadow-md"
    //   >
    //     <Question index={index} question={question} />
    //     <Answer answerList={answer} />
    //   </div>
    //   <div
    //     id="btn"
    //     className="flex flex-row justify-around items-center shadow-md mt-[2rem] gap-40 "
    //   >
    //     <div className="">
    //       <button
    //         className={`h-10 w-40 bg-black text-white rounded-md ${"disabled:opacity-70"}`}
    //         onClick={prevBtnHandler}
    //         disabled={index === 0 ? true : false}
    //       >
    //         Prev
    //       </button>
    //     </div>
    //     <div className="">
    //       <button
    //         className={`h-10 w-40 bg-black text-white rounded-md ${"disabled:opacity-70"}`}
    //         onClick={nextBtnHandler}
    //         disabled={index === db.length - 1 ? true : false}
    //       >
    //         Next
    //       </button>
    //     </div>
    //   </div>
    // </div>
    // <div>
    //   <Login />
    // </div>
    // <div>
    //   <signInWithGooglePopup/>
    // </div>
    // <div>
    //   <SignIn />
    // </div>
    // <div>
    //   <DashBoard />
    // </div>
    <div>
      <HistoryPage />
    </div>
  );
};

export default App;
