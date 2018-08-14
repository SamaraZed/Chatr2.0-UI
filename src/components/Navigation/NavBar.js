import React from "react";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";

// Components
import SideNav from "./SideNav";
import AuthButton from "./AuthButton";

function NavBar(props) {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
      id="mainNav"
    >
      <Link className="navbar-brand" to="/">
        Chatr2.0
      </Link>
      <button
        className="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <SideNav />
        <AuthButton />
      </div>
    </nav>
  );
}

export default NavBar;