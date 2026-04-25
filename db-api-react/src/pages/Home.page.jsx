import { Link, Links } from "react-router-dom";
import { Chardetails } from "../components/Eachcharacterdetails/Eachchar";
import {
  Charbox,
  Planbox,
} from "../components/home-char-plan-box/homecharplanbox";
import { Navbar } from "../components/Navcomponent/Navbar";
import { Planetsdetails } from "../Eachplanetsdetails/Eachplanet";
import "./Home.page.css";
export const Home = () => {
  return (
    <>
      <Navbar />
      <div>
        <div id="top">
          <img
            src="https://web.dragonball-api.com/images-compress/logo_dragonballapi.webp"
            alt=""
          />
        </div>
        <h1>The Dragon Ball API</h1>
      </div>
      <div className="homebox">
        <div>
          <h1>CHARACTERS</h1>
          <br />
          <Link to="/characters">
            <Charbox />
          </Link>
        </div>
        <div>
          <h1>PLANETS</h1>
          <br />
          <Link to="/planets">
            <Planbox />
          </Link>
        </div>
      </div>
    </>
  );
};
