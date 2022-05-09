import React from "react";
import { FaSearch } from "react-icons/fa";
import "./search.scss";

const Search = () => {
  return (
    <div className="search-products">
      <h1 className="search-title">Все кроссовки</h1>
      <div className="input-block">
        <FaSearch className="search-icon" />
        <input type="text" placeholder="Поиск..." />
      </div>
    </div>
  );
};

export default Search;
