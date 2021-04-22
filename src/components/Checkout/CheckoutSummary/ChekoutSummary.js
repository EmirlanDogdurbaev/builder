import classes from "./CheckoutSummary.module.css";

import PharmacyPreview from "../../PharmacyBuilder/PharmacyPreview/PharmacyPreview";
import Button from "../../UI/Button/Button"

const CheckoutSummary = ({ cancelCallback }) => {
  return (
    <div className={classes.CheckoutSummary}>
      <div>
        <PharmacyPreview ingredients={{
           

        
        }} price={150} />
      </div>
      <div>
        <Button>Checkout</Button>
        <Button onClick={cancelCallback}>Cancel</Button>
      </div>
    </div>
  );
}
 
export default CheckoutSummary;
