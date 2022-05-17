import { useEffect } from "react";
import "./index.scss";

function Search({ handleSearch, search, onSearchChange }) {
  useEffect(() => {
    let input = document.getElementById("searchInput");
    input.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("searchBtn").click();
      }
    });
  });
  return (
    <section className="search">
      <input
        id="searchInput"
        value={search}
        onChange={onSearchChange}
        placeholder="Pesquisar"
      ></input>
      <button id="searchBtn" onClick={handleSearch}>
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </section>
  );
}

export default Search;
