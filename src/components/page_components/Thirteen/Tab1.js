import { useContext } from 'react'
import { Switch } from "@headlessui/react"
import { gameContext, playerContext } from '../../pages/Thirteen'

export const Tab1 = (props) => {
    // get state from context
    const game = useContext(gameContext)
    const players = useContext(playerContext)

    return (
        <div className="flex flex-col p-10 pt-20 items-center w-11/12 mx-auto bg-white opacity-70 mt-10 rounded border-2 border-gray-400 md:w-1/2">
            <h1 className="text-4xl uppercase mb-8">13Up&Down</h1>
            <label className="mb-2 uppercase text-sm">number of players</label>
            <input value={players} className="p-3 w-1/2 md:w-1/4 bg-gray-200 border-2 border-gray-400" id="player-input" onChange={(e) => props.changePlayers(e.target.value)} />
            <label className="mt-4 uppercase text-sm">Game type</label>
            <div className="flex flex-row mt-4">
                <p className="uppercase text-xs mx-2">Half</p>
                <Switch
                    checked={game}
                    onChange={() => props.changeGame()}
                    className={`${game ? 'bg-slate-600' : 'bg-gray-200'
                        } relative inline-flex items-center h-6 rounded-full w-11 transition-all duration-100 ease-in-out`}>
                    <span className="sr-only">Set game type</span>
                    <span
                        className={`${game ? 'translate-x-6' : 'translate-x-1'
                            } inline-block w-4 h-4 transform bg-white rounded-full transition-all duration-100 ease-in-out`}
                    />
                </Switch>
                <p className="uppercase text-xs mx-2">Full</p>
            </div>
            <button className="mt-8 py-3 px-6 uppercase bg-gray-100 hover:bg-gray-200" onClick={() => props.handleStartGame()}>
                Start
            </button>
        </div>
    )
}
