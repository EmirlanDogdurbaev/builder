import { useEffect, useState } from "react";
import axios from "../../axios";
import { useDispatch, useSelector } from "react-redux";
import { load } from "../../store/actions/builder";
import withAxios from "../withAxios";
import PharmacyPreview from "../PharmacyBuilder/PharmacyPreview/PharmacyPreview";
import PharmacyControls from "../PharmacyBuilder/PharmacyControls/PharmacyControls";
import Modal from "../UI/Modal/Modal";
import OrderSummary from "../PharmacyBuilder/OrderSummary/OrderSummary";
import Button from "../UI/Button/Button";
import classes from "./PainkillersBuilder.module.css";

const PainkillersBuilder = ({ history }) => {
  const dispatch = useDispatch();
  const medicals = useSelector((state) => state.builder.medicals);
  console.log(medicals);
  const price = useSelector((state) => state.builder.price);
  const [ordering, setOrdering] = useState(false);

  useEffect(() => dispatch(load()), [dispatch]);

  // function loadDefaults() {
  //   axios
  //     .get('https://builder-a51d0-default-rtdb.firebaseio.com/default.json')
  //     .then(response => {
  //       setPrice(response.data.price);

  //       // For arrays
  //       // setIngredients(Object.values(response.data.medicals));
  //       // For objects
  //       setIngredients(response.data.medicals);
  //     });
  // }

  function startOrdering() {
    setOrdering(true);
  }

  function stopOrdering() {
    setOrdering(false);
  }

  function finishOrdering() {
    setOrdering(false);
    // loadDefaults();
    history.push("/checkout");
  }

  return (
    <div className={classes.PainkillersBuilder}>
      <PharmacyPreview medicals={medicals} price={price} />
       <PharmacyControls medicals={medicals} startOrdering={startOrdering} />
        <Modal show={ordering} cancel={stopOrdering}>
          <OrderSummary medicals={medicals} price={price} />
          <Button onClick={finishOrdering} green="green">
            Checkout
          </Button>
          <Button onClick={stopOrdering}>Cancel</Button>
        </Modal>
    </div>
  );
};

export default withAxios(PainkillersBuilder, axios);
