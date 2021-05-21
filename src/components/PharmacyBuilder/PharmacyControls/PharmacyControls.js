// import { Route } from "react-router";
import Switch from "./Switch/Switch"
import Button from "../../UI/Button/Button";
import PharmacyControl from "./PharmacyControl/PharmacyControl";
import classes from "./PharmacyControls.module.css";

const predMedicals = ["vitA", "vitB", "vitC", "vitD", "vitE", "vitK"];

const PharmacyControls = ({
  medicals,
  startOrdering,
  switchFilling,
  filling,
}) => {
  const results = [];
  let total = 0;
  for (const key in predMedicals) {
    const medical = predMedicals[key];
    total += medicals[medical];
    results.push(
      <PharmacyControl 
      key={medical}
      count={medicals[medical]}
      type={medical + filling} />
    
    );
  }

  return (
    <div className={classes.PharmacyControls}>
      <Switch switchFilling={switchFilling} />
      {results}
      <Button disabled={!total} onClick={startOrdering} glave="true">
        Order
      </Button>
    </div>
  );
};

export default PharmacyControls;
