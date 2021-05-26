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
      <div style={{ width: "250px", textAlign: "center", margin: "0 auto" }}>
        <div >
          <h1 style={{ margin: "0", marginBottom: "10px", marginTop: "10px" }}>
            {name}
          </h1>
          <strong style={{ fontWeight: "900", fontSize: "25px" }}>{phone}</strong>
          <p
            style={{
              fontWeight: "900",
              fontSize: "25px",
              margin: "0",
              marginBottom: "5px",
            }}
          >
            {address}
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "15px",
              color: "black",
              fontWeight: "700",
              listStylePosition: "initial",
            }}
          >
            {outputMedicals}
          </div>
          <strong style={{ marginTop: "15px" }}>{price} som</strong>
        </div>
      </div>
    </div>
  );
};

export default Order;
