import React from "react";
import Auxiliary from "../Auxiliary/Auxiliary";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import classes from "./Layout.module.css";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
const layout = props => (
  <Auxiliary>
    <Toolbar />
    <SideDrawer />
    <main className={classes.Content}>{props.children}</main>
  </Auxiliary>
);
export default layout;
