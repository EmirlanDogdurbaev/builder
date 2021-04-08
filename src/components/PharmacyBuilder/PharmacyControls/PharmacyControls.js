import classes from "./PharmacyControls.module.css";
import PharmacyControl from "./PharmacyControl/PharmacyControl";
import Button from "../../UI/Backdrop/Button/Button";


const PharmacyControls = ({addIngredient, removeIngredient }) => {
  const result = [];
  const ingredients = [
    "loperamid",
    "trimol",
    "mezim",
    "askorbinka",
    "dimidrol",
    "laktoG",
  ];
  for (const ingredient in ingredients) {
    result.push(
      <PharmacyControl
        key={ingredients[ingredient]}
        type={ingredients[ingredient]}
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
      />
    );
  }
  return <div className={classes.PharmacyControls}>
    {result}
    <Button disabled={!ingredients.length}>Order</Button>
    </div>;
};

export default PharmacyControls;
