import { useContext, useState } from "react"
import { gameContext, playerContext, playerArrayContext } from "../../pages/Thirteen"

export const Tab2 = (props) => {
    const game = useContext(gameContext)
    const players = useContext(playerContext)
    const playerScoreArray = useContext(playerArrayContext)

    // set initial state for round counter
    const [round, setRound] = useState(0)
    // set initial state for reverse indicator
    const [reverse, setReverse] = useState(false);

    // function to handle click of back button
    const handleBack = () => {
        if (round === 0) {
            props.changeTab(1)
            // clear inputs
            let inputs = document.querySelectorAll('input');
            inputs.forEach(input => input.value = '')
            // clear player scores
            props.resetPlayerScoreArray();
        } else {
            setRound(round - 1)
        }
    }

    // function to handle click of next button
    const handleNext = () => {
        // add all new scores to scores for each player
        playerScoreArray.forEach(player => {
            player.score = parseInt(player.score) + parseInt(player.newscore);
            player.newscore = 0;
        });
        // clear inputs
        let inputs = document.querySelectorAll('input');
        inputs.forEach(input => input.value = '')
        // check if reverse, then half game or full, and handle next appropriately
        if (reverse) {
            if (round === 20) {
                setRound(0);
                props.changeTab(3);
            } else {
                setRound(round + 1)
            }
        } else {
            if (game) {
                if (round === 10) {
                    setReverse(true);
                    setRound(round + 1)
                } else {
                    setRound(round + 1)
                }
            } else {
                if (round === 10) {
                    setRound(0)
                    props.changeTab(3)
                } else {
                    setRound(round + 1)
                }
            }
        }
    }

    // handle player score change
    const handlePlayerScore = (e, value) => {
        playerScoreArray[value].newscore = e.target.value
    }

    return (
        <div className="flex flex-col p-4 h-full">
            <h1 className="uppercase text-center text-2xl mx-auto mb-4">Round {round + 1}</h1>
            <img alt="Image card" className="w-1/3 mx-auto md:w-1/6 lg:w-1/12" src={reverse ? `/resources/${round - ((round - 10) * (2))}.png` : `/resources/${round}.png`} />
            <div className="grid grid-cols-2 gap-4 my-12 overflow-y-auto h-full lg:grid-cols-4 lg:gap-2 lg:w-3/4 lg:mx-auto">
                {/* create array from number of players, and map out component for each player */}
                {Array.from({ length: players }).map((_item, index) => (
                    <div className="w-3/4 text-slate-700 mx-auto" key={index}>
                        <div className="flex mb-2">
                            <h1 className="uppercase text-xs my-auto">Player {index + 1}</h1>
                            <p className="text-2xl mx-auto">{playerScoreArray[index].score}</p>
                        </div>
                        <input type="number" placeholder="Round score" className="w-full p-2" onChange={(e) => handlePlayerScore(e, index)} />
                    </div>
                ))}
            </div>
            <div className="flex justify-between lg:w-3/4 lg:mx-auto lg:mb-10 md:justify-around">
                <button className="uppercase py-3 px-6 bg-gray-100 border-2 border-gray-300 hover:bg-gray-200" onClick={() => handleBack()}>
                    Back
                </button>
                <button className="uppercase py-3 px-6 bg-gray-100 border-2 border-gray-300 hover:bg-gray-200" onClick={() => handleNext()}>
                    Next
                </button>
            </div>
        </div>
    )
}
