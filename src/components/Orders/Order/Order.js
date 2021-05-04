import classes from "./Order.module.css";

const Order = ({ name, phone, address, ingredients, price }) => {
  const output= Object.keys(ingredients)
    .map(ingredient => <em>{ingredient} - {ingredients[ingredient]}</em>);

  return (
    <div className={classes.Order}>
      <div>{name}, {phone}, {address}</div>
      <div>{output}</div>
      <strong>{price}</strong>
    </div>
  );
}

export default Order;