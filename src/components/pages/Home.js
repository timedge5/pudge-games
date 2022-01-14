import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <div className="flex flex-col justify-start pt-20 h-screen bg-gradient-to-t from-slate-900 to-green-900 md:flex-row md:justify-center">
            <Link to="13" className="px-3 py-8 bg-white w-1/2 mx-auto my-3 text-center uppercase cursor-pointer md:w-1/6 md:h-24 md:mx-3">13</Link>
            <Link to="yahtzee-scorecard" className="px-3 py-8 bg-white w-1/2 mx-auto my-3 text-center uppercase cursor-pointer md:w-1/6 md:h-24 md:mx-3">yahtzee</Link>
        </div>
    )
}
