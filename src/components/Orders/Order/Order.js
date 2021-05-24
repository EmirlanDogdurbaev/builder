import classes from "./Order.module.css";

const Order = ({ name, phone, address, medicals, price }) => {
  const outputMedicals = Object.keys(medicals).map((medical) => (
    <em key={medical}>
      {medical}-{medicals[medical]}
    </em>
  ));

  return (
    <div
      className={classes.Order}
      style={{
        display: "flex",
        flexDirection: "column",
        width: "300px",
        height: "400px",
        backgroundColor: "lightGray",
        fontSize: "20px",
        borderRadius: "15px",
      }}
    >
      <div>
        <h1>{name}</h1>
        <stong style={{ fontWeight: "900", fontSize: "25px" }}>{phone}</stong>
        <p style={{ fontWeight: "900", fontSize: "25px" , margin:"0", marginBottom:"5px"}}>{address}</p>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {outputMedicals}
      </div>
      <strong style={{ marginTop: "15px" }}>{price} som</strong>
    </div>
  );
};

export default Order;
