import { useState, createContext } from 'react'
import { Tab1 } from '../page_components/Thirteen/Tab1';
import { Tab2 } from '../page_components/Thirteen/Tab2';
import { Tab3 } from '../page_components/Thirteen/Tab3';

// init context vars
export const tabContext = createContext();
export const gameContext = createContext();
export const playerContext = createContext();
export const playerArrayContext = createContext();

export const Thirteen = () => {

    // set state for tab selection
    const [tab, setTab] = useState(1);
    // set state for game selection
    const [game, setGame] = useState(false);
    // set state for player number
    const [players, setPlayers] = useState(2); 
    // set state for player alert check
    const [showAlert, setShowAlert] = useState(false);
    // set state for player scores
    const [playerScoreArray, setPlayerScoreArray] = useState([])

    // function to allow children components to change state of tab
    const changeTab = (value) => {
        setTab(value);
    }
    // function to allow children components to change state of game selection
    const changeGame = () => {
        setGame(!game);
    }
    // function to allow children components to change state of game selection
    const changePlayers = (value) => {
        setPlayers(value);
    }
    // function to reset player score array to empty array
    const resetPlayerScoreArray = () => {
        setPlayerScoreArray([])
    }
    // function to determine which tab is currently being viewed
    const tabChange = (value) => {
        switch (value) {
            case 1:
                return <Tab1 changeTab={changeTab} changeGame={changeGame} changePlayers={changePlayers} handleStartGame={handleStartGame} />
            case 2:
                return <Tab2 changeTab={changeTab} resetPlayerScoreArray={resetPlayerScoreArray} />
            case 3:
                return <Tab3 changeTab={changeTab} resetPlayerScoreArray={resetPlayerScoreArray} />
            default:
                return;
        }
    }
    // function to handle alert close
    const handleAlertClose = () => {
        setShowAlert(false);
    }
    // function handle alert start game anyways
    const handleAlertStartGame = () => {
        createPlayerArray();
        setTab(2)
        setShowAlert(false);
    }

    // function to create players array
    const createPlayerArray = () => {
        Array.from({ length: players }).map((_item, index) => { return setPlayerScoreArray(playerScoreArray => [...playerScoreArray, { "name": `Player ${index + 1}`, "score": 0, "newscore": 0, "index": [index] }]) })
    }
    // function to handle starting the game normally
    const handleStartGame = () => {
        if (players < 5) {
            createPlayerArray();
            changeTab(2);
        } else {
            setShowAlert(true);
        }
    }

    return (
        <playerArrayContext.Provider value={playerScoreArray}>
            <playerContext.Provider value={players}>
                <gameContext.Provider value={game}>
                    <tabContext.Provider value={tab}>
                        <div className="h-screen bg-green-200 relative overflow-y-hidden">
                            {tabChange(tab)}
                            <div className={`h-full w-full bg-emerald-900 absolute transition-all ease-in-out duration-300 ${showAlert ? 'opacity-100 top-0' : 'opacity-0 top-full'}`}>
                                <div className={`h-fit w-3/4 p-4 border-2 text-slate-800 border-gray-400 transition-all ease-in duration-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-100 ${showAlert ? 'opacity-80' : 'opacity-0'} lg:w-1/3 lg:mx-auto`}>
                                    <p>{`Warning  - you have selected ${players} players. You need ONE deck of cards for every 4 players. Do you have enough?`}</p>
                                    <div className="flex justify-between mt-4">
                                        <button className="bg-gray-100 border-2 border-gray-200 p-2 text-black hover:bg-gray-200" onClick={() => handleAlertClose()}>
                                            Change settings
                                        </button>
                                        <button className="bg-gray-100 border-2 border-gray-200 p-2 text-black hover:bg-gray-200" onClick={() => handleAlertStartGame()}>
                                            Start game
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </tabContext.Provider>
                </gameContext.Provider>
            </playerContext.Provider>
        </playerArrayContext.Provider>
    )
}
