import React, { useState } from "react";
import "./Header.css";
import Home from "./Home";

const Header = () => {
  const [search, setSearch] = useState("");
  const [searchImage, setSearchImage] = useState([]);

  //   console.log(search);

  const handleSearch = async () => {
    await fetch(
      `https://api.unsplash.com/search/photos?client_id=XKOL0mtrOsVwum77sPqjIcTPGyRIO8IVJYcx9xiIIpM&query=${search}`
    )
      .then((res) => res.json())
      .then((data) => {
        setSearchImage(data.results);
      });
  };
  //   console.log(searchImage);

  return (
    <div>
      <div className="header">
        <input
          type="search"
          placeholder="search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={() => handleSearch()}>Search</button>
      </div>
      <Home searchImage={searchImage} />
    </div>
  );
};

export default Header;
