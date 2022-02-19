import { Routes, Route } from "react-router";
import { Home } from "../components/pages/Home";
import { Kart } from "../components/pages/Kart";
import { Thirteen } from "../components/pages/Thirteen";
import { Tictactoe } from "../components/pages/Tictactoe";
import { Yahtzee } from "../components/pages/Yahtzee";

export const Main = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/13" element={<Thirteen />} />
      <Route path="/yahtzee-scorecard" element={<Yahtzee />} />
      <Route path="/kart" element={<Kart />} />
      <Route path="/tictactoe" element={<Tictactoe />} />
    </Routes>
  );
};
