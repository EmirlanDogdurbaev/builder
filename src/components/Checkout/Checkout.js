import classes from "./Checkout.module.css";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import axios from "axios";
import PharmacyPreview from "../PharmacyBuilder/PharmacyPreview/PharmacyPreview";

const Checkout = ({ history }) => {
  function cancelCallback() {
    history.replace('/');
  }
  function submitCallback(event) {
    const data = new FormData(event.target);

    axios.post('https://builder-8c2e1-default-rtdb.firebaseio.com/orders.json', {
      name: data.get('name'),
      address: data.get('address'),
      phone: data.get('phone'),
      ingredients: {

      },
      price: 100,
    }).then(response => {
      history.replace('/');
    });

    event.preventDefault();
  }
  return (
    <div className={classes.Checkout}>
      <PharmacyPreview ingredients={{
        vitA: 5,
        vitB: 5,
        vitC: 5,
        vitD: 5,
        vitE: 5,
      }} price={150} />
      <CheckoutForm cancelCallback={cancelCallback} submitCallback={submitCallback} />
    </div>
  );
}

export default Checkout;