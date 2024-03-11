import { useRef } from "react";
import "./Navbar.css";
import SearchBar from "../SearchBar/SearchBar";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const handleSearch = (searchText) => {
    console.log("Search for:", searchText);
  };

  return (
    <header>
      <h4>7 Steps of Human Life</h4>
      <nav ref={navRef}>
        <a href="/#" onClick={showNavbar}>
          Birth
        </a>
        <a href="/#" onClick={showNavbar}>
          School
        </a>
        <a href="/#" onClick={showNavbar}>
          College
        </a>
        <a href="/#" onClick={showNavbar}>
          Job
        </a>
        <a href="/#" onClick={showNavbar}>
          Marriage
        </a>
        <a href="/#" onClick={showNavbar}>
          Kids
        </a>
        <a href="/#" onClick={showNavbar}>
          Old Age
        </a>
      </nav>
      <div className="search-bar-container">
        <SearchBar handleSearch={handleSearch} />
      </div>
    </header>
  );
}

export default Navbar;
