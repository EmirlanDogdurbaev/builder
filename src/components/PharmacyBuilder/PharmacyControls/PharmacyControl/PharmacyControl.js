import { useDispatch } from "react-redux";
import Button from "../../../UI/Button/Button";
import Medicine2 from "../../Medicine2/Medicine2";

import classes from "./PharmacyControl.module.css";

const PharmacyControl = ({type , count}) => {
  const dispatch = useDispatch();
  return (
    <div className={classes.PharmacyControl}>
       <Button onClick={() => dispatch({ type: "ADD_INGREDIENT", ingredient: type })}>+</Button>
      <div className={classes.ingredient}>
        <Medicine2 type={type} />
      </div>
      <Button onClick={() => dispatch({ type: "REMOVE_INGREDIENT", ingredient: type })} disabled={!count}>-</Button>
    </div>
  );
}

export default PharmacyControl;