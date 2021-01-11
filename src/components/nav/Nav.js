import React from "react";
import { Navbar,Mode,Logo,NavLink,Hamberger } from "./Navelements";

const Nav = () => {
  return (
    <Navbar>
      <Mode>Dark</Mode>
      <Logo>A.B</Logo>
      <Hamberger>
        <span></span>
        <span></span>
        <span></span>
      </Hamberger>
      {/* <div>
        <NavLink to="/">Intro</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">My Projects</NavLink>
      </div> */}
    </Navbar>
  );
};

export default Nav;
