import classes  from "./PharmacyBuilder.module.css"
import PharmacyControls from "./PharmacyControls/PharmacyControls"
import PharmacyPreview from "./PharmacyPreview/PharmacyPreview"

const PharmacyBuilder = () => {
    const ingredients = {
        askorbinka: 1,
        trimol : 4,
        dimidrol : 1,
    }
  return (
    <div className={classes.PharmacyBuilder}>
     <PharmacyPreview ingredients={ingredients} />
     <PharmacyControls/>
    </div>
  );
}

export default PharmacyBuilder;
