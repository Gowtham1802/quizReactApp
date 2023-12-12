const LeaderBoardPage = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-4">
      <div className="mt-6 text-[2rem] font-bold min-h-full">
        <h1 className="text-center italic hover:not-italic">LeaderBoard </h1>
      </div>
      <div className="w-[50rem] flex flex-col justify-center items-center">
        <div className="w-full flex justify-center items-center m-[0.5rem]">
          <p className="w-1/3 text-center bg-slate-500  p-[1rem]">RANK</p>
          <p className="w-1/3 text-center p-[1rem]">NAME</p>
          <p className="w-1/3 text-center p-[1rem]">SCORE</p>
        </div>
        <div className="w-full flex justify-evenly items-center m-[0.5rem] p-[1rem]">
          <p className="w-1/3 text-center">1</p>
          <p className="w-1/3 text-center">Abishek</p>
          <p className="w-1/3 text-center">9</p>
        </div>
        <div className="w-full flex justify-evenly items-center m-[0.5rem] p-[1rem]">
          <p className="w-1/3 text-center">2</p>
          <p className="w-1/3 text-center">Balavignesh</p>
          <p className="w-1/3 text-center">8</p>
        </div>
        <div className="w-full flex justify-evenly items-center m-[0.5rem] p-[1rem]">
          <p className="w-1/3 text-center">3</p>
          <p className="w-1/3 text-center">Keerthiraj</p>
          <p className="w-1/3 text-center">7</p>
        </div>
        <div className="w-full flex justify-evenly items-center m-[0.5rem] p-[1rem]">
          <p className="w-1/3 text-center">4</p>
          <p className="w-1/3 text-center">Sreenish</p>
          <p className="w-1/3 text-center">5</p>
        </div>
      </div>
    </div>
  );
};

export default LeaderBoardPage;
