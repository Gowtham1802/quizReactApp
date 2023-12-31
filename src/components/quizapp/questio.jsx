import "./question.css";

const Question = ({ index, question }) => {
  return (
    <>
      <div className="w-[100%]">
        <h1
          id="qus"
          className="font-black text-[2rem] mb-[1rem] text-center text-pink-400 animate-bounce"
        >
          Question {index + 1}
        </h1>
        <p className="font-[700] text-[1.5rem] text-center text-cyan-400">
          {question}
        </p>
      </div>
    </>
  );
};

export default Question;
