import { useEffect, useState } from "react";
import { getcharacters } from "../../service/getcharacter";
import { Charcards } from "../charactercardcomponent/Charactercard";
import "./Eachchar.css";
export const Chardetails = ({ data }) => {
  const [characters, setcharacters] = useState(null);

  useEffect(() => {
    const fetcheddata = async () => {
      const chardata = await getcharacters();
      setcharacters(chardata);
    };
    fetcheddata();
  }, []);
  console.log(characters);
  return (
    <>
      <div className="box">
        {characters &&
          characters.map((eachchar) => {
            return <Charcards data={eachchar} />;
          })}
      </div>
    </>
  );
};
