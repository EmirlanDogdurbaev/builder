import classes from "./OrderSummary.module.css";

const OrderSummary = ({ medicals, price }) => {
  const labels = {
    vitA: "Vitamin A ",
    vitB: "Vitamin B ",
    vitC: "Vitamin C ",
    vitD: "Vitamin D",
    vitE: "Vitamin E ",
    vitK: "Vitamin K ",
  };
  const results = Object.keys(medicals).map((type) => (
    <li key={type}>
      {labels[type]}: {medicals[type]}
    </li>
  ));

  return (
    <div className={classes.OrderSummary}>
      <h3>Order summary</h3>
      <ul>{results}</ul>
      <strong>{price} som</strong>
    </div>
  );
};

export default OrderSummary;
