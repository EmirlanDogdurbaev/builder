import DrawerOpen from "../Drawer/DrawerOpen/DrawerOpen";
import classes from "./Toolbar.module.css";
import Nav from "../Nav/Nav";
import Logo from "../UI/Logo/Logo";

const Toolbar = ({ openDrawer }) => {
  return (
    <div className={classes.Toolbar}>
      <Logo />
      <nav>
        <Nav />
      </nav>
      <DrawerOpen click={openDrawer} />
    </div>
  );
};

export default Toolbar;
