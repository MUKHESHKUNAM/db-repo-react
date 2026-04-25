import { useLocation } from "react-router-dom";
import "./planet.page.css";

export const Planet = () => {
  const location = useLocation();
  const planets = location.state.data;
  return (
    <>
      <div className="planetinfocontainer">
        <div className="planetimage">
          <img src={planets.image} alt="" />
          <br />
          <h3>name: {planets.name}</h3>
        </div>
        <div className="planetinfo">
          <h1>description of planet</h1>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <p>{planets.description}</p>
        </div>
      </div>
    </>
  );
};
