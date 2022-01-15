import { useState } from "react";

export const Yahtzee = () => {
    const [upperSubtotal, setUpperSubtotal] = useState(0);
    const [lowerSubtotal, setLowerSubtotal] = useState(0);
    const [upper, setUpper] = useState([0, 0, 0, 0, 0, 0]);
    const [lower, setLower] = useState([0, 0, 0, 0, 0, 0, 0, 0]);

    // arrays for labels
    const upperLabels = ['1', '2', '3', '4', '5', '6'];
    const lowerLabels = ['3 of a kind', '4 of a kind', 'Full House', 'Small straight', 'Large straight', 'Yahtzee', 'Chance', 'Bonus'];

    const handleUpperInput = (e, value) => {
        if (e.target.value === '') {
            upper[value] = 0;
            setUpper([...upper]);
        } else {
            upper[value] = parseInt(e.target.value);
            setUpper([...upper])
        }
        const upperSub = upper.reduce((acc, val) => {
            return acc + val;
        }, 0)
        setUpperSubtotal(upperSub);
    }

    const handleLowerInput = (e, value) => {
        if (e.target.value === '') {
            lower[value] = 0;
            setLower([...lower]);
        } else {
            lower[value] = parseInt(e.target.value);
            setLower([...lower])
        }
        const lowerSub = lower.reduce((acc, val) => {
            return acc + val;
        }, 0)
        setLowerSubtotal(lowerSub);
    }

    const handleClear = () => {
        let inputs = document.querySelectorAll('input');
        inputs.forEach(input => {
            input.value = '';
        })
        setUpper([0, 0, 0, 0, 0, 0])
        setLower([0, 0, 0, 0, 0, 0, 0, 0])
        setUpperSubtotal(0);
        setLowerSubtotal(0);
    }

    return (
        <div className="flex flex-col h-screen bg-blue-200 pt-10 relative">
            <div className="grid grid-cols-2 gap-2 w-3/4 mx-auto mb-2">
                {upperLabels.map((label, i) => (
                    <div className="flex" key={i}>
                        <p className="p-1 mr-2">{label}</p>
                        <input type="number" className="p-1 w-1/2 mx-auto input" onChange={(e) => handleUpperInput(e, i)} />
                    </div>
                ))}
            </div>
            <div className="flex w-3/4 mx-auto mt-2 pt-2 border-t-2 border-gray-400">
                <p className="w-1/2">Upper</p>
                <p className="px-2 bg-gray-100 border-2 border-bg-400">{upperSubtotal}</p>
            </div>
            <div className="flex mx-auto w-3/4 my-1">
                <p className="w-1/2">Bonus</p>
                <p className="px-2 bg-gray-100 border-2 border-bg-400">{upperSubtotal > 34 ? 35 : 0}</p>
            </div>
            <div className="flex mx-auto w-3/4 pb-2 mb-2 border-b-2 border-gray-400">
                <p className="w-1/2">Upper Total</p>
                <p className="px-2 bg-gray-100 border-2 border-bg-400">{upperSubtotal > 34 ? (upperSubtotal + 35) : upperSubtotal}</p>
            </div>
            <div className="mx-auto w-3/4">
                {lowerLabels.map((label, i) => (
                    <div className="flex mb-1" key={i}>
                        <p className="p-1 mr-2">{label}</p>
                        <input type="number" className="p-1 w-1/4 mx-auto input mr-0" onChange={(e) => handleLowerInput(e, i)} />
                    </div>
                ))}
            </div>
            <div className="flex mx-auto w-3/4 mb-1 mt-2 pt-2 border-t-2 border-gray-400">
                <p className="w-1/2">Lower</p>
                <p className="ml-2 px-2 bg-gray-100 border-2 border-bg-400">{lowerSubtotal}</p>
            </div>
            <div className="flex mx-auto w-3/4">
                <p className="w-1/2">Total</p>
                <p className="ml-2 px-2 bg-gray-100 border-2 border-bg-400">{upperSubtotal + lowerSubtotal}</p>
            </div>
            <button className="p-1 uppercase text-xs bg-gray-200 border-2 border-gray-400 absolute top-2 right-2 hover:bg-gray-100" onClick={() => handleClear()}>clear</button>
        </div>
    )
}
