import { useLocation } from "react-router-dom";
import "./charcter.page.css";

export const Character = () => {
  const location = useLocation();
  const character = location.state.data;
  return (
    <>
      <div className="characterinfocontainer">
        <div className="characterimage">
          <img src={character.image} alt="" />
          <h3>name: {character.name}</h3>
        </div>
        <div className="characterinfo">
          <h1>description of character</h1>
          <br />
          <br />
          <br />

          <p>{character.description}</p>
        </div>
      </div>
    </>
  );
};
