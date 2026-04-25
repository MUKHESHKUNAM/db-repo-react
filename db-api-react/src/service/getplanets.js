import axios from "axios";
export const getplanets = async () => {
  try {
    const apiresponce1 = await axios.get("http://localhost:4000/getplanets");
    console.log(apiresponce1);
    return apiresponce1.data.planets;
  } catch (error) {
    console.log("error is" + error);
  }
};
