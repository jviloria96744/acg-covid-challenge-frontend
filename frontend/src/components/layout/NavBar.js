import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import NavBarContent from "../navbar/NavBarContent";

/**
 * Basic Navbar component for the application
 */
const Navbar = () => {
  return (
    <AppBar position="static" style={{ background: "black" }}>
      <Toolbar>
        <NavBarContent />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
