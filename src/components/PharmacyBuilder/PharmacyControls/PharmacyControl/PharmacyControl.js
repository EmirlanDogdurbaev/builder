import Button from "../../../UI/Backdrop/Button/Button";
import Medicine2 from "../../Medicine2/Medicine2";
import classes from "./PharmacyControl.module.css";

const PharmacyControl = ({ type, addIngredient, removeIngredient }) => {
  return (
    <div className={classes.PharmacyControl}>
      <Button onClick={() => removeIngredient(type)}>-</Button>
      <Medicine2 type={type} />
      <Button onClick={() => addIngredient(type)}>+</Button>
    </div>
  );
};

export default PharmacyControl;
