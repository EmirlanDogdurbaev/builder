import Medicine from "../Medicine/Medicine";
import classes from "./PharmacyPreview.module.css";


const PharmacyPreview = ({ ingredients, price }) => {
  const result = [];
  for (const ingredient in ingredients) {
    for (let i = 0; i < ingredients[ingredient]; i++) {
      result.push(<Medicine key={ingredient + i} type={ingredient} />)
    }
  }

  return (
    <div className={classes.PharmacyPreview}>
      <div className={classes.medical}>
        <div className={classes.container}>
          {result}
        </div>
      </div>
      <div className={classes.price}>{price.toFixed(1)} som</div>
    </div>
  );
}

export default PharmacyPreview;