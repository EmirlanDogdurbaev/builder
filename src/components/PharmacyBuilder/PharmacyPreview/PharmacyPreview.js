import Medicine from "../Medicine/Medicine";
import classes from "./PharmacyPreview.module.css";
import shelf from "../../../images/shelf.svg";

const PharmacyPreview = ({ ingredients, price }) => {
  const result = [];
  for (const ingredient in ingredients) {
    for (let i = 0; i < ingredients[ingredient]; i++) {
      result.push(<Medicine key={ingredient + i} type={ingredient} />);
    }
  }

  return (
    <div className={classes.PharmacyPreview}>
      <div
        className={classes.shelf}
        style={{
          backgroundImage: `url(${shelf})`,
          backgroundSize: "cover",
          width: "350px",
          height: "120px",
        }}
      ></div>
      <div>
        <div className={classes.container}>{result}</div>
      </div>

      <div>
        <div className={classes.price}> {price.toFixed(1)} som</div>
      </div>
    </div>
  );
};

export default PharmacyPreview;
