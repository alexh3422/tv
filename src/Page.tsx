import { useState } from "react";
import Background from "./assets/netflix.webp";

export default function Page() {
  const [isWatching, setIsWatching] = useState(true);
  const [confirmedNotWatching, setConfirmedNotWatching] = useState(false);

  const handleYes = () => {
    setIsWatching(true);
    setConfirmedNotWatching(true);
  };

  const handleNo = () => {
    setIsWatching(false);
    setConfirmedNotWatching(false);
  };

  return (
    <div
      className="w-screen h-screen flex justify-center items-center"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {isWatching && !confirmedNotWatching ? (
        <div className=" text text-white text-center p-8 border border-white rounded-lg bg-gray-600 bg-opacity-75 flex flex-col justify-center items-center">
          <h1 className="text-4xl mb-8 font-bold">
            Are you still watching Stranger Things?
          </h1>
          <div className=" space-x-4">
            <button
              className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded"
              onClick={handleYes}
            >
              Yes
            </button>
            <button
              className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded"
              onClick={handleNo}
            >
              No
            </button>
          </div>
        </div>
      ) : isWatching === false && confirmedNotWatching === false ? (
        <div className="text-white text-center p-8 border border-white rounded-lg bg-gray-600 bg-opacity-75 flex flex-col justify-center items-center">
          <h1 className=" text text-4xl  font-bold ">I THOUGHT SO ....</h1>
        </div>
      ) : (
        <div className=" text text-white text-center p-8 border border-white rounded-lg bg-gray-600 bg-opacity-75">
          <h1 className="text-4xl mb-8 font-bold">
            Oh yeah? What color was Dustin's shirt?
          </h1>
          <div className="flex flex-col space-y-2 justify-center items-center">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox text-gray-800" />
              <span className="ml-2">Red</span>
            </label>
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox text-gray-800" />
              <span className="ml-2">Blue</span>
            </label>
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox text-gray-800" />
              <span className="ml-2">Black</span>
            </label>
          </div>
        </div>
      )}
    </div>
  );
}
