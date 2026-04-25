import { useNavigate } from "react-router-dom";
import "./charactercard.css";
export const Charcards = ({ data }) => {
  const { image, name, ki, maxKi, race } = data;
  const navigate = useNavigate();
  const clickhandle = () => {
    navigate("/character", { state: { data } });
  };
  return (
    <>
      {/* <Link to="/character"> */}
      <div className="cardstyle" onClick={clickhandle}>
        <div className="imagecard">
          <img src={image} alt="" />
          <h1>name: {name}</h1>
          <h2>ki: {ki}</h2>
          <h2>maxki:{maxKi}</h2>
          <h2>race: {race}</h2>
          <h2></h2>
        </div>
      </div>
      {/* </Link> */}
    </>
  );
};
