import classes from "./OrderSummary.module.css";

const OrderSummary = ({ medicals, price }) => {
  const labels = {
    vitA: "Vitamin A ",
    vitB: "Vitamin B ",
    vitC: "Vitamin C ",
    vitD: "Vitamin D",
    vitE: "Vitamin E ",
    vitK: "Vitamin K ",
    vitAF1: "Aspirin ",
    vitBF1: "Paracetamol",
    vitCF1: "Analgenium ",
    vitDF1: "Ketonal",
    vitEF1: "Citramon",
    vitKF1: "Dimidrol ",
    vitAF2: "Aminofen ",
    vitBF2: "Ery",
    vitCF2: "Busfar",
    vitDF2: "Ibuprofen",
    vitEF2: "Kineret",
    vitKF2: "Mapap",
  };
  const results = Object.keys(medicals).map((type, id) => (
    <li key={id} style={{fontSize:"20px"}}>
      {labels[type]}: {medicals[type]}
    </li>
  ));


  return (
    <div className={classes.OrderSummary}>
      <h3>Order summary</h3>
      <ul style={{height:"180px", display:"flex", flexWrap:"wrap", flexDirection:"column"}}>
        <li>{results}</li></ul>
      <strong style={{marginTop:"50px"}}> {price.toFixed(1)} som</strong>
    </div>
  );
};

export default OrderSummary;
