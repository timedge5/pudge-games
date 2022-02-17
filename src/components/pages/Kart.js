import React, { useState } from "react";

export const Kart = () => {
  const [cup, setCup] = useState("All");
  const [map, setMap] = useState("select a cup");
  const [trackArr, setTrackArr] = useState([
    {
      name: "Mushroom",
      cup_tracks: [
        "Luigi Circuit",
        "Moo Moo Meadows",
        "Mushroom Gorge",
        "Toad's Factory",
      ],
    },
    {
      name: "Flower",
      cup_tracks: [
        "Mario Circuit",
        "Cocnut Mall",
        "DK Summit",
        "Wario's Gold Mine",
      ],
    },
    {
      name: "Star",
      cup_tracks: [
        "Daisy Circuit",
        "Koopa Cape",
        "Maple Treeway",
        "Grumble Volcano",
      ],
    },
    {
      name: "Special",
      cup_tracks: [
        "Dry Dry Ruins",
        "Moonview Highway",
        "Bowser's Castle",
        "Rainbow Road",
      ],
    },
    {
      name: "Shell",
      cup_tracks: [
        "GCN Peach Beach",
        "DS Yoshi Falls",
        "SNES Ghost Valley 2",
        "N64 Mario Raceway",
      ],
    },
    {
      name: "Banana",
      cup_tracks: [
        "N64 Sherbet Land",
        "GBA Shy Guy Beach",
        "DS Delfino Square",
        "GCN Waluigi Stadium",
      ],
    },
    {
      name: "Leaf",
      cup_tracks: [
        "DS Desert Hills",
        "GBA Bowser Castle 3",
        "N64 DK's Jungle Parkway",
        "GCN Mario Circuit",
      ],
    },
    {
      name: "Lightning",
      cup_tracks: [
        "SNES Mario Circuit 3",
        "DS Peach Gardens",
        "GCN DK Mountain",
        "N64 Bowser's Castle",
      ],
    },
  ]);

  //   handle submit - will have to handle if a track array has less than 4 entries at some point
  const handleSubmit = () => {
    let cupIndex;
    let randomMap;
    let trackIndex;
    // if all is selected
    if (cup === "All") {
      cupIndex = Math.floor(Math.random() * trackArr.length);
      trackIndex = Math.floor(
        Math.random() * trackArr[cupIndex].cup_tracks.length
      );
      randomMap = trackArr[cupIndex].cup_tracks[trackIndex];
      setMap(randomMap);
      return trackArr[cupIndex].cup_tracks.splice(trackIndex, 1);
    }
    // else statement
    cupIndex = trackArr.findIndex((i) => {
      return i.name === cup;
    });
    if (trackArr[cupIndex].cup_tracks.length === 0)
      return setMap("🐱‍💻No more maps🐱‍👤");
    trackIndex = Math.floor(
      Math.random() * trackArr[cupIndex].cup_tracks.length
    );
    randomMap = trackArr[cupIndex].cup_tracks[trackIndex];
    setMap(randomMap);
    return trackArr[cupIndex].cup_tracks.splice(trackIndex, 1);
  };

  //   handle clearing the input, map, and resetting the track array
  const handleClear = () => {
    setCup("All");
    setMap("");
    setTrackArr([
      {
        name: "Mushroom",
        cup_tracks: [
          "Luigi Circuit",
          "Moo Moo Meadows",
          "Mushroom Gorge",
          "Toad's Factory",
        ],
      },
      {
        name: "Flower",
        cup_tracks: [
          "Mario Circuit",
          "Cocnut Mall",
          "DK Summit",
          "Wario's Gold Mine",
        ],
      },
      {
        name: "Star",
        cup_tracks: [
          "Daisy Circuit",
          "Koopa Cape",
          "Maple Treeway",
          "Grumble Volcano",
        ],
      },
      {
        name: "Special",
        cup_tracks: [
          "Dry Dry Ruins",
          "Moonview Highway",
          "Bowser's Castle",
          "Rainbow Road",
        ],
      },
      {
        name: "Shell",
        cup_tracks: [
          "GCN Peach Beach",
          "DS Yoshi Falls",
          "SNES Ghost Valley 2",
          "N64 Mario Raceway",
        ],
      },
      {
        name: "Banana",
        cup_tracks: [
          "N64 Sherbet Land",
          "GBA Shy Guy Beach",
          "DS Delfino Square",
          "GCN Waluigi Stadium",
        ],
      },
      {
        name: "Leaf",
        cup_tracks: [
          "DS Desert Hills",
          "GBA Bowser Castle 3",
          "N64 DK's Jungle Parkway",
          "GCN Mario Circuit",
        ],
      },
      {
        name: "Lightning",
        cup_tracks: [
          "SNES Mario Circuit 3",
          "DS Peach Gardens",
          "GCN DK Mountain",
          "N64 Bowser's Castle",
        ],
      },
    ]);
  };

  return (
    <div className="h-screen p-3 bg-yellow-300 text-center overflow-hidden">
      <h1 className="uppercase text-2xl font-light font-mono my-10 lg:text-4xl">
        Mario Kart Map Selector
      </h1>
      <div className="flex flex-col items-center lg:flex-row lg:justify-center">
        <img
          src="/resources/toad.png"
          alt="Toad"
          className="w-1/2 mb-10 md:w-1/4"
        />
        <div className="w-full flex flex-col items-center lg:w-1/2">
          <h2 className="uppercase text-2xl font-bold h-5 lg:mb-20">{map}</h2>
          <select
            className="p-2 cursor-pointer mt-10"
            onChange={(e) => setCup(e.target.value)}
            value={cup}
          >
            <option value="All">All</option>
            <option value="Mushroom">Mushroom</option>
            <option value="Flower">Flower</option>
            <option value="Star">Star</option>
            <option value="Special">Special</option>
            <option value="Shell">Shell</option>
            <option value="Banana">Banana</option>
            <option value="Leaf">Leaf</option>
            <option value="Lightning">Lightning</option>
          </select>
          <div className="flex space-x-4 mt-10">
            <button
              onClick={() => handleClear()}
              className="uppercase font-light py-3 px-10 bg-red-400 text-white"
            >
              clear
            </button>
            <button
              onClick={() => handleSubmit()}
              className="uppercase font-light py-3 px-10 bg-green-400 text-white"
            >
              go
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
