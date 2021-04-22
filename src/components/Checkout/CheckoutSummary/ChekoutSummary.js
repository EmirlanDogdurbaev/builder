import classes from "./CheckoutSummary.module.css";

import PharmacyPreview from "../../PharmacyBuilder/PharmacyPreview/PharmacyPreview";
import Button from "../../UI/Button/Button"

const CheckoutSummary = ({ cancelCallback }) => {
  return (
    <div className={classes.CheckoutSummary}>
      <div className={classes.check}>
        <PharmacyPreview ingredients={{
           askorbinka:1,
           trimol:1,
           dimidrol:1,
           mezim:1,
           loperamid:1,
           laktoG:1,
        }} price={150} />
        
        <Button>Checkout</Button>
        <Button onClick={cancelCallback}>Cancel</Button>
      </div>
    </div>
  );
}
 
export default CheckoutSummary;
