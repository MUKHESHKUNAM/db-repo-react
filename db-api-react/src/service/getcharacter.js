import axios from "axios";
export const getcharacters = async () => {
  try {
    const apiresponce = await axios.get("http://localhost:4000/getcharacrers");
    console.log(apiresponce);
    return apiresponce.data.items;
  } catch (error) {
    console.log("error is" + error);
  }
};
