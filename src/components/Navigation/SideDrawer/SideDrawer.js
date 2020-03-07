import React from "react";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDrawer.module.css";
import Logo from "../../Logo/Logo";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
const sideDrawer = props => (
  <Auxiliary>
    <div className={classes.SideDrawer}>
      <Logo height="11%" />
      <nav>
        <NavigationItems />
      </nav>
    </div>
  </Auxiliary>
);

export default sideDrawer;
