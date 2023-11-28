import Question from "./components/quizapp/questio";
import Answer from "./components/quizapp/answer";
import "./App.css";

const App = () => {
  return (
    <div id="page1" className="w-[100vw] min-h-screen flex flex-col justify-center items-center  ">
      <div
        id="box"
        className="w-[40rem] rounded-l-sm	 h-[25rem] flex flex-col justify-around items-center shadow-md"
      >
        <Question />
        <Answer />
        {/* <LoginPage></LoginPage> */}
      </div>
    </div>
  );
};

export default App;
