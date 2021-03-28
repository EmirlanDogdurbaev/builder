import React from "react";
import classes  from "./PharmacyBuilder.module.css"
import PharmacyControls from "./PharmacyControls/PharmacyControls"
import PharmacyPreview from "./PharmacyPreview/PharmacyPreview"
import {useState} from "react"

const PharmacyBuilder = () => {
  const [ingredients, setIngredients] = useState({
    askorbinka: 15,
    trimol : 21,
    dimidrol : 12,
    lartoG : 1,
    mezim: 1,
    loperamid: 1,
  });

  function addIngredient(type) {
    const newIngredients = { ...ingredients };
    newIngredients[type]++;
    setIngredients(newIngredients);
  }

  function removeIngredient(type) {
    if (ingredients[type]) {
      const newIngredients = { ...ingredients };
    newIngredients[type]--;
    setIngredients(newIngredients);
    }
  }

  return (
    <div className={classes.PharmacyBuilder}>
      <PharmacyPreview ingredients={ingredients} />
      <PharmacyControls
        ingredients={ingredients}
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
      />
    </div>
  );
};

export default React.memo(PharmacyBuilder);