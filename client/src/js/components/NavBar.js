import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import WelcomeMessage from "../components/WelcomeMessage";
import "./../../styles/NavBar.css";

const NavBar = () => (
  <nav>
    <div className="nav__content">
      <div className="nav__group group--title">
        <h1>Scrim VALORANT</h1>
        <WelcomeMessage />
      </div>
      <div className="nav__group group--buttons">
        <a href="https://twitter.com/NimsterCSGO">
          <TwitterIcon />
        </a>
        <a href="https://github.com/nimobeeren/valorant-scrim/">
          <GitHubIcon />
        </a>
      </div>
    </div>
  </nav>
);

export default NavBar;
