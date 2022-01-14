import { Routes, Route } from "react-router"
import {Home} from '../components/pages/Home'
import {Thirteen} from '../components/pages/Thirteen'
import {Yahtzee} from '../components/pages/Yahtzee'


export const Main = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route path="/13" element={<Thirteen />}/>
            <Route path="yahtzee-scorecard" element={<Yahtzee/>}/>
        </Routes>
    )
}
