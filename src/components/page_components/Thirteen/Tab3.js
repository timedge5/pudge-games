import { useContext } from "react";
import { playerArrayContext } from "../../pages/Thirteen";

export const Tab3 = (props) => {
  const playerScoreArray = useContext(playerArrayContext);

  let sortedPlayerArray = playerScoreArray.sort((a, b) =>
    a.score > b.score ? 1 : -1
  );

  const handleBackToStart = () => {
    props.changeTab(1);
    props.resetPlayerScoreArray();
  };

  return (
    <div className="h-full flex flex-col p-10 text-gray-200">
      <h1 className="mx-auto uppercase text-4xl mb-10">End of Game</h1>
      <h2 className="text-center text-2xl mb-10">
        Congratulations {sortedPlayerArray[0].name}! You won with{" "}
        {sortedPlayerArray[0].score}{" "}
        {sortedPlayerArray[0].score === 1 ? "point" : "points"}.
      </h2>
      <div className="grid grid-cols-2 gap-2 w-3/4 mx-auto lg:w-5/12">
        {sortedPlayerArray.map((player) => (
          <div key={player.index} className="mx-auto">
            <h1 className="uppercase">
              {player.name} - {player.score}
            </h1>
          </div>
        ))}
      </div>
      <button
        className="mt-16 w-1/2 mx-auto uppercase py-3 px-6 text-black bg-gray-100 border-2 border-gray-300 hover:bg-gray-200 md:w-1/3 lg:w-1/6"
        onClick={() => handleBackToStart()}
      >
        Back to Start
      </button>
    </div>
  );
};
