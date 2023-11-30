import "./answer.css";

const Answer = ({ answerList }) => {
  return (
    <>
      <div className="w-[100%] flex flex-row justify-start items-center gap-[4rem] mt-[2rem]">
        <div className="w-[100%] h-[10rem] flex flex-wrap justify-around items-center">
          {answerList.map((ele, ind) => {
            return (
              <div className="w-[15rem] flex justify-center" key={ind}>
                <button
                  className="h-12 w-40 bg-black text-white rounded-md "
                  key={ind}
                >
                  {ind === 0
                    ? "A. "
                    : ind === 1
                    ? "B. "
                    : ind === 2
                    ? "C. "
                    : "D. "}
                  {ele}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Answer;
