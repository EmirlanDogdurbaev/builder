import Button from "../../UI/Button/Button";
import PharmacyControl from "./PharmacyControl/PharmacyControl";
import classes from "./PharmacyControls.module.css";

const PharmacyControls = ({ medicals, startOrdering }) => {
  const results = [];
  let total = 0;
  for (const medical in medicals) {
    total += medicals[medical];
    results.push(
      <PharmacyControl key={medical} count={medicals[medical]} type={medical} />
    );
  }

  return (
    <div className={classes.PharmacyControls}>
      <strong>Medicals</strong>
      {results}
      <Button disabled={!total} onClick={startOrdering}>
        Order
      </Button>
    </div>
  );
};

export default PharmacyControls;
