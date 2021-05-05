import classes from "./PharmacyBuilder.module.css";
import PharmacyControls from "./PharmacyControls/PharmacyControls";
import PharmacyPreview from "./PharmacyPreview/PharmacyPreview";
import Modal from "../UI/Modal/Modal";
import OrderSummary from "./OrderSummary/OrderSummary";
import Button from "../UI/Button/Button";
import {  useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";


const PharmacyBuilder = ({ history }) => {
  const prices = {
    vitA : 1,
    vitB : 1,
    vitC : 1,

  };
  const ingredients = useSelector(state => state.ingredients);
  const price = useSelector(state => state.price);
  const [ordering, setOrdering] = useState(false);



  // useEffect(loadDefaults, []);

  // function loadDefaults() {
  //   axios
  //     .get('https://builder-8c2e1-default-rtdb.firebaseio.com/default.json')
  //     .then(response => {
  //       setPrice(response.data.price);
  //       setIngredients(response.data.ingredients);
  //     });
  // }


 
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
      address: "Kadyrova 108/6",
      phone:"0500023120", 
      name:"Dogdurbaev Emirlan",
    })
    .then(() =>{
      setOrdering(false);
      // loadDefaults();
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

  
