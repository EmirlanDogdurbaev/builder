import Medicine from "../Medicine/Medicine";
import classes from "./PharmacyPreview.module.css";

const PharmacyPreview = ({ ingredients }) => {
  const result = [];

  for (const ingredient in ingredients) {
    result.push(
      <Medicine
        key={ingredients[ingredient] + ingredient}
        type={ingredients[ingredient]}
      />
    );
  }

  return (
    <div className={classes.PharmacyPreview}>
      <div className={classes.ingredients}>{result}</div>
    </div>
  );
};

export default PharmacyPreview;
