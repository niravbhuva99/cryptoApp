import React, { useEffect, useState } from "react";
import { search } from "./api/Fetch";

const Search = () => {
  const [searchData, setSearchData] = useState([]);
  console.log("search", searchData);
  //   searchData && localStorage.setItem("search", JSON.stringify(searchData));
  useEffect(() => {
    const ls = localStorage.getItem("search");
    setSearchData(JSON.parse(ls));
    // search("bit").then((data) => setSearchData(data.data.data));
  }, []);
  return <div>Search</div>;
};

export default Search;
