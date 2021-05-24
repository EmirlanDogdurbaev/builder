// import { Route } from "react-router";
// import Switch from "./Switch/Switch"
import Button from "../../UI/Button/Button";
import PharmacyControl from "./PharmacyControl/PharmacyControl";
import classes from "./PharmacyControls.module.css";

// const predMedicals = ["vitA", "vitB", "vitC", "vitD", "vitE", "vitK"];

const PharmacyControls = ({
  medicals,
  startOrdering,
}) => {
  const results = [];
  let total = 0;
  for (const medical in medicals) {
    total += medicals[medical];
    results.push(<PharmacyControl type={medical} count={medicals[medical]} key={medical} />);
  }

  return (
    <div className={classes.PharmacyControls}>
      <p style={{fontSize:"20px", fontWeight:"500",padding:"0", margin:"0",marginTop:"10px", }}>Medicals</p>
    {results}
    <Button disabled={!total} onClick={startOrdering}>
      Order
    </Button>
  </div>
  );
};

export default PharmacyControls;
