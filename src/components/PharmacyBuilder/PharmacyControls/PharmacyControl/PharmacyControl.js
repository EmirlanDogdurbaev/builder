import BunsIngredient from "../../Medicine/Medicine";
import classes from "./PharmacyControl.module.css";

const PharmacyControl = ({ type, addIngredient, removeIngredient }) => {
    return ( 
        <div className = {classes.PharmacyControl}>
            <button className = {classes.ControlButton} onClick = {() => removeIngredient(type)}>-</button>
            <BunsIngredient type = {type} />
            <button className = {classes.ControlButton} onClick = {() => addIngredient(type)}>+</button>
        </div>
    );
}
 
export default PharmacyControl;