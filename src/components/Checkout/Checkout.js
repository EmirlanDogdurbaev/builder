import PharmacyPreview from "../PharmacyBuilder/PharmacyPreview/PharmacyPreview";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import classes from "./Checkout.module.css";
import axios from "../../axios";
import { useSelector } from "react-redux";
import withAxios from "../withAxios";

const Checkout = ({ history }) => {
  const { token, id } = useSelector(state => state.auth);
  const medicals = useSelector((state) => state.builder.medicals);
  const price = useSelector((state) => state.builder.price);

  function cancelCallback() {
    history.replace("/");
  }

  function submitCallback(event) {
    const data = new FormData(event.target);

    axios
      .post('/orders.json?auth=' + token,{
        name: data.get("name"),
        address: data.get("address"),
        phone: data.get("phone"),
        medicals: medicals,
        price: price,
        userId: id
      })
      .then((response) => {
        history.replace("/");
      });

    event.preventDefault();
  }

  return (
    <div className={classes.Checkout}>
      <PharmacyPreview medicals={medicals} price={price} />
      <CheckoutForm
        cancelCallback={cancelCallback}
        submitCallback={submitCallback}
      />
    </div>
  );
};

export default withAxios(Checkout, axios);
