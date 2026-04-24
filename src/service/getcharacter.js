import axios from "axios";
export const getcharacters = async () => {
  try {
    const apiresponce = await axios.get("http://localhost:1010/getcharacrers");
    console.log(apiresponce);
    debugger;
    return apiresponce.data.items;
  } catch (error) {
    console.log("error is" + error);
  }
};
