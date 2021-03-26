import classes from "./Logo.module.css";
import logotip from "../../images/logotip.svg";

const Logo = () => {
    return (
        <div className={classes.Logo}>
            <img src={logotip} alt="logo"></img>
        </div>
    );
}

export default Logo;