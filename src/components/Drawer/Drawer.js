import Logo from "../UI/Logo/Logo";
import Backdrop from "../UI/Backdrop/Backdrop";
import Nav from "../Nav/Nav"

import classes from "./Drawer.module.css";

const Drawer = ({ open, closeDrawer }) => {
  const drawerClasses = [
    classes.content,
    open ? classes.open : classes.close
  ];

  return (
    <div className={classes.Drawer}>
      <Backdrop show={open} click={closeDrawer} />
      <div className={drawerClasses.join(" ")}>
        <Logo />
        <Nav />
      </div>
    </div>
  );
}

export default Drawer;