import Question from "./components/quizapp/questio";
import Answer from "./components/quizapp/answer";
const App = () => {
  return (
    <div className="w-[100vw] min-h-screen flex flex-col justify-center items-center bg-im">
      <div className="w-[40rem] bg-slate-500 h-[25rem] flex flex-col justify-around items-center">
        <Question />
        <Answer />
      </div>
    </div>
  );
};

export default App;
