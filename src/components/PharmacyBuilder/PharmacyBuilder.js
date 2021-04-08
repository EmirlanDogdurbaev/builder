import React, { useState, useEffect } from "react";
import classes from "./PharmacyBuilder.module.css";
import PharmacyControls from "./PharmacyControls/PharmacyControls";
import PharmacyPreview from "./PharmacyPreview/PharmacyPreview";
import axios from "axios";

const PharmacyBuilder = () => {
  const prices = {
    trimol: 5,
    loperamid: 4,
    mezim: 5,
    laktoG: 5,
    dimidrol: 3,
    askorbinka: 2,
  };

  const [ingredients, setIngredients] = useState([]);
  const [price, setPrice] = useState(0);

  useEffect(
    () => axios
      .get('https://builder-8c2e1-default-rtdb.firebaseio.com/default.json')
      .then(response => {
        setPrice(response.data.price);
        setIngredients(Object.values(response.data.ingredients));
        console.log(ingredients)
      }),
  []);

  function addIngredient(type) {
    const newIngredients = [...ingredients];
    newIngredients.push(type);
    setPrice(price + prices[type]);
    setIngredients(newIngredients);
  }

  function removeIngredient(type){ 
    const newIngredients = [...ingredients]
    const index = newIngredients.lastIndexOf(type);
    if (index !== -1) {
    newIngredients.splice(index, 1);
    setPrice(price - prices[type]);
    setIngredients(newIngredients);
    }
  }

  return (
    <div className={classes.PharmacyBuilder}>
      <PharmacyPreview ingredients={ingredients}
       price={price} />
      <PharmacyControls
        ingredients={ingredients}
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
      />
    </div>
  );
};

export default React.memo(PharmacyBuilder);





