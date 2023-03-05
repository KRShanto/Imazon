import React from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  return (
    <div className="search-div">
      <input type="text" className="search" placeholder="Search" />
      <FaSearch className="search-icon" />
    </div>
  );
}
