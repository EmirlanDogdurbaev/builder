import Medicine from "../../Medicine/Medicine";
import classes from "./PharmacyControl.module.css";

const PharmacyControl = ({ type, addIngredient, removeIngredient }) => {
    return ( 
        <div className = {classes.PharmacyControl}>
            <button className = {classes.ControlButton} onClick = {() => removeIngredient(type)}>-</button>
            <Medicine  type = {type} >
                
            </Medicine>
            <button className = {classes.ControlButton} onClick = {() => addIngredient(type)}>+</button>
        </div>
    );
}
 
export default PharmacyControl;