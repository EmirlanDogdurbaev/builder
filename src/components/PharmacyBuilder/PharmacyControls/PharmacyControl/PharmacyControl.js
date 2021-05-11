import { useDispatch } from "react-redux";
import { add, remove } from "../../../../store/actions/builder";
import Button from "../../../UI/Button/Button";
import Medicine from "../../Medicine/Medicine";
import classes from "./PharmacyControl.module.css";

const PharmacyControl = ({ type, count }) => {
  const dispatch = useDispatch();

  return (
    <div className={classes.PharmacyControl}>
      <Button onClick={() => dispatch(add(type))}>+</Button>
      <div className={classes.ingredient}>
        <Medicine type={type} fixed />
      </div>
      <Button onClick={() => dispatch(remove(type))} disabled={!count}>
        -
      </Button>
    </div>
  );
};

export default PharmacyControl;
