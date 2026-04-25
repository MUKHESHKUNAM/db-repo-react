import { useNavigate } from "react-router-dom";

export const Planetcards = ({ data }) => {
  const { image, name } = data;
  const navigate = useNavigate();
  const clickhandle = () => {
    navigate("/planet", { state: { data } });
  };
  return (
    <>
      {/* <Link to="/character"> */}
      <div className="cardstyle" onClick={clickhandle}>
        <div className="imagecard">
          <img src={image} alt="" />
          <h1>name: {name}</h1>
        </div>
      </div>
      {/* </Link> */}
    </>
  );
};
