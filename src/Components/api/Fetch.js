import axios from "axios";
const url = "https://coinranking1.p.rapidapi.com/";

const Fetch = async (term) => {
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

// const fetchCoins = async () => {};
