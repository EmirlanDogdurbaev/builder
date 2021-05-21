import classes from "./Order.module.css";

const Order = ({ name, phone, address, medicals, price }) => {
  const outputMedicals = Object.keys(medicals).map((medical) => (
    <em key={medical}>
      {medical}-{medicals[medical]} 
    </em>
  ));

  return (
    <div className={classes.Order}>
      <div>
        {name}, {phone}, {address}
      </div>
      <div>{outputMedicals}</div>
      <strong>{price}</strong>
    </div>
  );
};

export default Order;
