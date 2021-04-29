import Medicine from "../Medicine/Medicine";
import classes from "./PharmacyPreview.module.css";
import test from "../../../images/karTest.png";

const PharmacyPreview = ({ ingredients, price }) => {
  const result = [];
  for (const ingredient in ingredients) {
    for (let i = 0; i < ingredients[ingredient]; i++) {
      result.push(<Medicine key={ingredient + i} type={ingredient} />);
    }
  }

  return (
    <div className={classes.PharmacyPreview}>
    <div className={classes.korobka}
      
  >
      <div
        className={classes.ingredients}
        style={{ backgroundImage: `url(${test})`, backgroundSize: "cover" , width:"400px"}}>
        {result}
      </div>
    </div>
    <div className={classes.price}>{price.toFixed(1)} som</div>
  </div>
  );
};

export default PharmacyPreview;
