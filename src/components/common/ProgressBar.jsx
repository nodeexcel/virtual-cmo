 function ProgressBar({ classess, percent }) {
    return (
      <>
        <div className=" flex items-center justify-center px-4 mt-2">
          <div
            className={` h-4 bg-gray-200 rounded-lg flex justify-between w-[90%] border-3 ring-1 ${classess}`}
          >
            <div
              className={`w-[${percent}%] h-[100%] bg-[#009379] border-3 ring-1 rounded-lg  w-[90%] `}
            ></div>
          </div>
          <div className="text-[#009379] text-md  ml-[2%]">
            <p className="text-3xl">{percent}%</p>
            <p>Completed</p>
          </div>
        </div>
      </>
    );
  }

  export default ProgressBar