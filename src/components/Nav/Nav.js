import classes from "./Nav.module.css";
import NavItem from "./NavItem/NavItem";

const Nav = () => {
  return (
    <ul className={classes.Nav}>
      <NavItem url="/" exact>Builder </NavItem>
      <NavItem url="/painkillersBuilder" exact>Painkillers </NavItem>
      {/* <NavItem url="/checkout">Checkout</NavItem> */}
      <NavItem url="/orders">Orders</NavItem>
    </ul>
  );
};

export default Nav;
