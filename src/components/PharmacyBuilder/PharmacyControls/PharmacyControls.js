import Button from "../../UI/Button/Button";
import PharmacyControl from "./PharmacyControl/PharmacyControl"
import classes from "./PharmacyControls.module.css";

const PharmacyControls = ({
  ingredients,
  addIngredient,
  removeIngredient,
  startOrdering,
  type
}) => {
  const results = [];
  let total = 0;
  for (const ingredient in ingredients) {
    total += ingredients[ingredient];
    results.push(<PharmacyControl
        key={ingredient}
        add={addIngredient}
        remove={removeIngredient}
        count={ingredients[ingredient]}
        type={ingredient} />)
  }

  return (
    <div className={classes.PharmacyControls}>
     
      <strong>Ingredients</strong>
      {results}
      <Button disabled={!total} onClick={startOrdering} order>Order</Button>
    </div>
  );
}

export default PharmacyControls;
