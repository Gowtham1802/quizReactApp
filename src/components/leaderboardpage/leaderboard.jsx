const LeaderBoardPage = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-4">
      <div className="mt-6 text-[2rem] font-bold min-h-full">
        <h1 className="text-center italic hover:not-italic">LeaderBoard </h1>
      </div>
      <div className="w-[50rem] flex flex-col justify-center items-center">
        <div className="w-full flex justify-center items-center m-[0.5rem]">
          <p className="w-1/3 text-center bg-indigo-950  p-[0.5rem] text-white font-bold text-lg">
            RANK
          </p>
          <p className="w-1/3 text-center bg-indigo-950  p-[0.5rem] text-white font-bold text-lg">
            NAME
          </p>
          <p className="w-1/3 text-center bg-indigo-950  p-[0.5rem] text-white font-bold text-lg">
            SCORE
          </p>
        </div>
        <div className="w-full flex justify-evenly items-center m-[0.5rem] p-[1rem]">
          <p className="w-1/3 text-center bg-neutral-100  p-[0.5rem] font-bold ">
            1
          </p>
          <p className="w-1/3 text-center bg-neutral-100  p-[0.5rem] font-bold ">
            Abishek
          </p>
          <p className="w-1/3 text-center bg-neutral-100  p-[0.5rem] font-bold ">
            9
          </p>
        </div>
        <div className="w-full flex justify-evenly items-center m-[0.5rem] p-[1rem]">
          <p className="w-1/3 text-center bg-neutral-100  p-[0.5rem] font-bold">
            2
          </p>
          <p className="w-1/3 text-center bg-neutral-100  p-[0.5rem] font-bold">
            Balavignesh
          </p>
          <p className="w-1/3 text-center bg-neutral-100  p-[0.5rem] font-bold">
            8
          </p>
        </div>
        <div className="w-full flex justify-evenly items-center m-[0.5rem] p-[1rem]">
          <p className="w-1/3 text-center bg-neutral-100  p-[0.5rem] font-bold">
            3
          </p>
          <p className="w-1/3 text-center bg-neutral-100  p-[0.5rem] font-bold">
            Keerthiraj
          </p>
          <p className="w-1/3 text-center bg-neutral-100  p-[0.5rem] font-bold">
            7
          </p>
        </div>
        <div className="w-full flex justify-evenly items-center m-[0.5rem] p-[1rem]">
          <p className="w-1/3 text-center bg-neutral-100  p-[0.5rem] font-bold">
            4
          </p>
          <p className="w-1/3 text-center bg-neutral-100  p-[0.5rem] font-bold">
            Sreenish
          </p>
          <p className="w-1/3 text-center bg-neutral-100  p-[0.5rem] font-bold">
            5
          </p>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default LeaderBoardPage;
