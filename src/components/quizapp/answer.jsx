const Answer = () => {
  return (
    <>
      <div className="w-[100%] flex flex-col justify-center items-center gap-[4rem] mt-[2rem]">
        <div className="flex flex-row justify-between items-center gap-[10rem]">
          <div className="">
            <button
              htmlFor="first"
              className="h-10 w-40 bg-black text-white rounded-md "
            >
              A. Gowtham
            </button>
          </div>
          <div className="">
            <button
              htmlFor="second"
              className="h-10 w-40 bg-black text-white rounded-md "
            >
              B. Bala
            </button>
          </div>
        </div>
        <div className="width-[30rem] flex flex-row justify-between items-center gap-[10rem]">
          <div className="">
            <button
              htmlFor="first"
              className="h-10 w-40 bg-black text-white rounded-md"
            >
              C. Abi
            </button>
          </div>
          <div className="">
            <button
              htmlFor="first"
              className="h-10 w-40 bg-black text-white rounded-md"
            >
              D. Pradip
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Answer;
