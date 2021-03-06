import PharmacyPreview from "./PharmacyPreview/PharmacyPreview";
import PharmacyControls from "./PharmacyControls/PharmacyControls";

import classes from "./PharmacyBuilder.module.css";
import { useEffect, useState } from "react";
import axios from "../../axios";
import Modal from "../UI/Modal/Modal";
import OrderSummary from "./OrderSummary/OrderSummary";
import Button from "../UI/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { load } from "../../store/actions/builder";
import withAxios from "../withAxios";

const PharmacyBuilder = ({ history }) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.token !== null);
  const medicals = useSelector((state) => state.builder.medicals);
  const price = useSelector((state) => state.builder.price);
  const [ordering, setOrdering] = useState(false);

  useEffect(() => dispatch(load()), [dispatch]);

  function startOrdering() {
    if (isAuthenticated) {
      setOrdering(true);
    }
    else {
      history.push('./auth');
    }
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
    <div className={classes.PharmacyBuilder}>
      <PharmacyPreview medicals={medicals} price={price} />
      <PharmacyControls
        medicals={medicals}
        startOrdering={startOrdering}
      />
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

export default withAxios(PharmacyBuilder, axios);
