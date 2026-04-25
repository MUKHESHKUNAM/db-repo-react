import { useEffect, useState } from "react";
import { getplanets } from "../service/getplanets";
import { Planetcards } from "../planetscardcomponets/planetscard";

export const Planetsdetails = ({ data }) => {
  const [planets, setplanets] = useState(null);

  useEffect(() => {
    const fetcheddata = async () => {
      const planetsdata = await getplanets();
      setplanets(planetsdata);
      console.log(planets)
    };
    fetcheddata();
  }, []);
  // console.log(characters);
  return (
    <>
      <div className="box">
        {planets &&
          planets.map((eachchar) => {
            return <Planetcards data={eachchar} />;
          })}
      </div>
    </>
  );
};
