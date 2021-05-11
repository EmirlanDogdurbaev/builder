import Medicine from "../Medicine/Medicine";

import classes from "./PharmacyPreview.module.css";

const PharmacyPreview = ({ medicals, price }) => {
  const result = [];
  for (const medical in medicals) {
    for (let i = 0; i < medicals[medical]; i++) {
      result.push(<Medicine key={medical + i} type={medical} />);
    }
  }

  return (
    <div className={classes.PharmacyPreview}>
      <div className={classes.cont}>
        <div className={classes.medicals}>{result}</div>
      </div>
      <div className={classes.price}>{price}som</div>
    </div>
  );
};

export default PharmacyPreview;
