import Medicine2 from "../../Medicine2/Medicine2";
import classes from "./PharmacyControl.module.css";

const PharmacyControl = ({ type, addIngredient, removeIngredient }) => {
    return ( 
        <div className = {classes.PharmacyControl}>
            <button className = {classes.ControlButton} onClick = {() => removeIngredient(type)}>-</button>
            <Medicine2  type = {type} >
                
            </Medicine2>
            <button className = {classes.ControlButton} onClick = {() => addIngredient(type)}>+</button>
        </div>
    );
}
 
export default PharmacyControl;