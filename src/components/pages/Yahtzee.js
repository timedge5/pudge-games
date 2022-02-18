import { useState } from "react";

export const Yahtzee = () => {
  const [upperSubtotal, setUpperSubtotal] = useState(0);
  const [lowerSubtotal, setLowerSubtotal] = useState(0);
  const [upper, setUpper] = useState([0, 0, 0, 0, 0, 0]);
  const [lower, setLower] = useState([0, 0, 0, 0, 0, 0, 0, 0]);

  // arrays for labels
  const upperLabels = [1, 2, 3, 4, 5, 6];

  const handleUpperInput = (e, value) => {
    if (e.target.value === "") {
      upper[value] = 0;
      setUpper([...upper]);
    } else {
      upper[value] = parseInt(e.target.value);
      setUpper([...upper]);
    }
    const upperSub = upper.reduce((acc, val) => {
      return acc + val;
    }, 0);
    setUpperSubtotal(upperSub);
  };

  const handleLowerInput = (e, value) => {
    if (e.target.value === "") {
      lower[value] = 0;
      setLower([...lower]);
    } else {
      lower[value] = parseInt(e.target.value);
      setLower([...lower]);
    }
    const lowerSub = lower.reduce((acc, val) => {
      return acc + val;
    }, 0);
    setLowerSubtotal(lowerSub);
  };

  const handleClear = () => {
    let inputs = document.querySelectorAll("input");
    let selects = document.querySelectorAll("select");
    inputs.forEach((input) => {
      input.value = "";
    });
    selects.forEach((select) => {
      select.value = "none";
    });
    setUpper([0, 0, 0, 0, 0, 0]);
    setLower([0, 0, 0, 0, 0, 0, 0, 0]);
    setUpperSubtotal(0);
    setLowerSubtotal(0);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-200 pt-2 relative md:px-32 lg:px-96 md:pt-5">
      <h1 className="uppercase font-light text-2xl text-center mb-3 md:mb-5">
        yahtzee
      </h1>
      <div className="grid grid-cols-2 gap-2 w-3/4 mx-auto mb-2">
        {upperLabels.map((label, i) => (
          <div className="flex" key={i}>
            <p className="p-1 mr-2">{label}</p>
            <select
              className="px-2 cursor-pointer w-1/2 bg-white"
              onChange={(e) => handleUpperInput(e, i)}
            >
              <option value="none" selected disabled hidden>
                -
              </option>
              <option value={0}>0</option>
              <option value={label}>{label}</option>
              <option value={label * 2}>{label * 2}</option>
              <option value={label * 3}>{label * 3}</option>
              <option value={label * 4}>{label * 4}</option>
              <option value={label * 5}>{label * 5}</option>
            </select>
          </div>
        ))}
      </div>
      {/* upper score */}
      <div className="flex w-3/4 mx-auto mt-1 pt-2 border-t-2 border-gray-400">
        <p className="w-1/2">Upper</p>
        <p className="px-4 bg-gray-100 border-2 border-bg-400">
          {upperSubtotal}
        </p>
      </div>
      <div className="flex mx-auto w-3/4 my-1">
        <p className="w-1/2">Bonus</p>
        <p className="px-4 bg-gray-100 border-2 border-bg-400">
          {upperSubtotal > 62 ? 35 : 0}
        </p>
      </div>
      <div className="flex mx-auto w-3/4 pb-2 mb-2 border-b-2 border-gray-400">
        <p className="w-1/2">Upper Total</p>
        <p className="px-4 bg-gray-100 border-2 border-bg-400">
          {upperSubtotal > 62 ? upperSubtotal + 35 : upperSubtotal}
        </p>
      </div>
      {/* lower inputs */}
      <div className="mx-auto w-3/4">
        <div className="flex mb-1">
          <p className="p-1 mr-2">3 of a kind</p>
          <input
            type="number"
            className="p-1 w-1/4 mx-auto input mr-0"
            onChange={(e) => handleLowerInput(e, 1)}
          />
        </div>
        <div className="flex mb-1">
          <p className="p-1 mr-2">4 of a kind</p>
          <input
            type="number"
            className="p-1 w-1/4 mx-auto input mr-0"
            onChange={(e) => handleLowerInput(e, 2)}
          />
        </div>
        <div className="flex justify-between mb-1">
          <p className="p-1 mr-2">Full House</p>
          <select
            className="px-2 cursor-pointer bg-white w-1/4"
            onChange={(e) => handleLowerInput(e, 3)}
          >
            <option value="none" selected disabled hidden>
              0
            </option>
            <option value={0}>-</option>
            <option value={25}>25</option>
          </select>
        </div>
        <div className="flex justify-between mb-1">
          <p className="p-1 mr-2">Small Straight</p>
          <select
            className="px-2 cursor-pointer bg-white w-1/4"
            onChange={(e) => handleLowerInput(e, 4)}
          >
            <option value="none" selected disabled hidden>
              0
            </option>
            <option value={0}>-</option>
            <option value={30}>30</option>
          </select>
        </div>
        <div className="flex justify-between mb-1">
          <p className="p-1 mr-2">Large Straight</p>
          <select
            className="px-2 cursor-pointer bg-white w-1/4"
            onChange={(e) => handleLowerInput(e, 5)}
          >
            <option value="none" selected disabled hidden>
              0
            </option>
            <option value={0}>-</option>
            <option value={40}>40</option>
          </select>
        </div>
        <div className="flex justify-between mb-1">
          <p className="p-1 mr-2">Yahtzee</p>
          <select
            className="px-2 cursor-pointer bg-white w-1/4"
            onChange={(e) => handleLowerInput(e, 6)}
          >
            <option value="none" selected disabled hidden>
              0
            </option>
            <option value={0}>-</option>
            <option value={50}>50</option>
          </select>
        </div>
        <div className="flex mb-1">
          <p className="p-1 mr-2">Chance</p>
          <input
            type="number"
            className="p-1 w-1/4 mx-auto input mr-0"
            onChange={(e) => handleLowerInput(e, 7)}
          />
        </div>
        <div className="flex justify-between mb-1">
          <p className="p-1 mr-2">Bonus</p>
          <select
            className="px-2 cursor-pointer bg-white w-1/4"
            onChange={(e) => handleLowerInput(e, 6)}
          >
            <option value="none" selected disabled hidden>
              -
            </option>
            <option value={100}>100</option>
            <option value={200}>200</option>
            <option value={300}>300</option>
          </select>
        </div>
      </div>
      {/* scoring */}
      <div className="flex mx-auto w-3/4 mb-1 mt-2 pt-2 border-t-2 border-gray-400">
        <p className="w-1/2">Lower</p>
        <p className="ml-2 px-4 bg-gray-100 border-2 border-bg-400">
          {lowerSubtotal}
        </p>
      </div>
      <div className="flex mx-auto w-3/4">
        <p className="w-1/2">Total</p>
        <p className="ml-2 px-4 bg-gray-100 border-2 border-bg-400">
          {upperSubtotal > 62
            ? upperSubtotal + 35 + lowerSubtotal
            : upperSubtotal + lowerSubtotal}
        </p>
      </div>
      <button
        className="p-2 uppercase text-xs text-white bg-red-400 absolute top-2 right-2 hover:scale-110 md:top-5 md:right-5 lg:right-96"
        onClick={() => handleClear()}
      >
        clear
      </button>
    </div>
  );
};
