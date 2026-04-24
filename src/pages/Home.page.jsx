import { Chardetails } from "../components/Eachcharacterdetails/Eachchar";
import { Navbar } from "../components/Navcomponent/Navbar";
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
          <h1>The Dragon Ball API</h1>
        </div>
        <br />
        <br />
      </div>
      <Chardetails />
    </>
  );
};
