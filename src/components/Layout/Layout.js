import { useState } from "react";
import Toolbar from "../Toolbar/Toolbar";
import Drawer from "../Drawer/Drawer"

import classes from "./Layout.module.css";
import PharmacyBuilder from "../PharmacyBuilder/PharmacyBuilder";

const Layout = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className={classes.Layout}>
      <Toolbar openDrawer={() => setDrawerOpen(true)} />
      <Drawer open={drawerOpen} closeDrawer={() => setDrawerOpen(false)} />
      <main>
      <PharmacyBuilder />
      </main>
    </div>
  );
}

export default Layout;