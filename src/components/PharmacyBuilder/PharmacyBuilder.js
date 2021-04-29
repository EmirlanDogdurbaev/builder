import classes from "./PharmacyBuilder.module.css";
import PharmacyControls from "./PharmacyControls/PharmacyControls";
import PharmacyPreview from "./PharmacyPreview/PharmacyPreview";
import Modal from "../UI/Modal/Modal";
import OrderSummary from "./OrderSummary/OrderSummary";
import Button from "../UI/Button/Button";
import { useEffect, useState } from "react";
import axios from "axios";

const PharmacyBuilder = ({ history }) => {
  const prices = {
    askorbinka: 15,
    trimol:12,
    dimidrol:14,
    loperamid:17,
    mezim:19,
    laktoG:21,
  };
  const [ingredients, setIngredients] = useState({});
  const [price, setPrice] = useState(0);
  const [ordering, setOrdering] = useState(false);

  useEffect(loadDefaults, []);

  function loadDefaults() {
    axios
      .get('https://builder-8c2e1-default-rtdb.firebaseio.com/default.json')
      .then(response => {
        setPrice(response.data.price);
        setIngredients(response.data.ingredients);
      });
  }

  function addIngredient(type) {
    const newIngredients = { ...ingredients };
    newIngredients[type]++;
    setPrice(price + prices[type]);
    setIngredients(newIngredients);
  }

  function removeIngredient(type) {
    if (ingredients[type]) {
      const newIngredients = { ...ingredients };
      newIngredients[type]--;
      setPrice(price - prices[type]);
      setIngredients(newIngredients);
    }
  }

 
  function startOrdering() {
    setOrdering(true);
  }

  function stopOrdering() {
    setOrdering(false);
  }

  function finishOrdering() {
    axios
    .post('https://builder-8c2e1-default-rtdb.firebaseio.com/orders.json',{
      ingredients: ingredients,
      price: price,
      address: "Shopokova kv 4",
      phone:"0707379480", 
      name:"Dogdurbaev Emirlan",
    })
    .then(() =>{
      setOrdering(false);
      loadDefaults();
      history.push('/checkout')
    })
  }

  return (
    <div className={classes.PharmacyBuilder}>
      <PharmacyPreview
        ingredients={ingredients}
        price={price} />
      <PharmacyControls
        ingredients={ingredients}
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
        startOrdering={startOrdering}
        />
      <Modal
        show={ordering}
        cancel={stopOrdering}>
        <OrderSummary
          ingredients={ingredients}
          price={price}
            />
          <Button onClick={finishOrdering} green>Checkout</Button>
          <Button onClick={stopOrdering}>Cancel</Button>
        </Modal>
        
    </div>
  );
}

export default PharmacyBuilder;