import React, { useState } from "react";
import "./Navbar.css";
import { FaSearch } from "react-icons/fa";
import Logo from "./assets/Logo.png";
import Carousel from "./Carousel";
import LoginButton from "./login";
import { useAuth0 } from "@auth0/auth0-react";

export default function Navbar() {
  const { isAuthenticated, user } = useAuth0();

  const handleChange = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };
  document.addEventListener("keypress", (e) => {
    if (e.target === "enter") {
      document.getElementById("search-button").click();
    }
    console.log(search);
  });
  const [search, setSearch] = useState("");
  return (
    <header className="header">
      <div className="Navbar">
        <img src={Logo} className="logo" alt="This is my logo" />
        <div className="searchBarHolder">
          <input
            type="text"
            value={search}
            className="search-bar"
            placeholder="Search Your Funds Here"
            onChange={handleChange}
          />
          <FaSearch className="search-icon" />
        </div>
        <div className="links">
          <button className="buttons">About</button>
          <button className="buttons">Contact</button>
          <LoginButton />
        </div>
      </div>
      <div className="funk-container">
        <span className="funky">
          Funky <br />
          Funding
        </span>
        <Carousel />
      </div>
    </header>
  );
}
