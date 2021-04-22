
import Button from "../../../UI/Button/Button";
import Medicine from "../../Medicine/Medicine";
import classes from "./PharmacyControl.module.css";

const PharmacyControl = ({ type, add, remove, count }) => {
  return (
    <div className={classes.PharmacyControl}>
      <Button onClick={() => add(type)}>+</Button>
      <div className={classes.ingredient}>
        <Medicine type={type} />
      </div>
      <Button onClick={() => remove(type)} disabled={!count}>-</Button>
    </div>
  );
}

export default PharmacyControl;
