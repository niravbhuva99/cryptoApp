import axios from "axios";
const URL = "https://coinranking1.p.rapidapi.com/";

const Fetch = async (term, url = URL) => {
  try {
    const res = await axios.request({
      url: url + term,
      headers: {
        "X-RapidAPI-Key": "d8c710e4c8msh85c1b33b1354696p1863dcjsnedf1c78c5fe1",
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      },
    });

    return res;
  } catch (error) {
    console.error(error);
  }
};

export default Fetch;

export const search = async (searchTerm) => {
  try {
    const res = await axios.request({
      url: `https://api.coinranking.com/v2/search-suggestions?query=${searchTerm}`,
      headers: {
        "X-RapidAPI-Key": "d8c710e4c8msh85c1b33b1354696p1863dcjsnedf1c78c5fe1",
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      },
    });
    console.log("####", res);
    return res;
  } catch (error) {
    console.error(error);
  }
};
