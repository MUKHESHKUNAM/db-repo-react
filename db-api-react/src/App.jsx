import "./App.css";

import { Home } from "./pages/Home.page";
import { Navbar } from "./components/Navcomponent/Navbar";
import { Chardetails } from "./components/Eachcharacterdetails/Eachchar";
import { Route, Routes } from "react-router-dom";

import { Characters } from "./pages/characters.page";

import { Planets } from "./pages/planets.page";
import { Character } from "./pages/character.page";
import { Planet } from "./pages/planet.page";

export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/character" element={<Character />} />
        <Route path="/planet" element={<Planet />} />
      </Routes>
    </>
  );
};

// export default App;
