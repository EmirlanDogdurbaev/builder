import Medicine from "../Medicine/Medicine";
import classes from "./PharmacyPreview.module.css";
import shelf from "../../../images/shelf.svg";

const PharmacyPreview = ({ medicals, price }) => {
  const result = [];
  for (const medical in medicals) {
    for (let i = 0; i < medicals[medical]; i++) {
      result.push(<Medicine key={medical + i} type={medical} />);
    }
  }

  return (
    <div className={classes.PharmacyPreview}>
        <div
          className={classes.shelf}
          style={{ backgroundImage: `url(${shelf})` }}>
           <div>
              <div className={classes.plantFlex}>{result}</div>
          </div>
        </div>
        <div>
          <div className={classes.price}> {price.toFixed(1)} som</div>
        </div>
    </div>
  );
};

export default PharmacyPreview;
