import PharmacyControl from "./PharmacyControl/PharmacyControl";
import classes from "./PharmacyControls.module.css";

const PharmacyControls = ({ ingredients, addIngredient, removeIngredient }) => {
  const result = [];
  for (const ingredient in ingredients) {
    result.push(
      <PharmacyControl
        type={ingredient}
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
      />
    );
  }
  return <div className={classes.PharmacyControls}>{result}</div>;
};

export default PharmacyControls;