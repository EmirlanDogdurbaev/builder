import classes from "./Logo.module.css";
import logo from "../../../images/medical.svg";

const Logo = () => {
    return (
        <div className={classes.Logo}>
            <img src={logo} alt="logo" width={60}/>
            Pharmacy
        </div>
    );
}

export default Logo;