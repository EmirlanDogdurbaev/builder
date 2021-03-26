import classes  from "./PharmacyBuilder.module.css"
import PharmacyControls from "./PharmacyControls/PharmacyControls"
import PharmacyPreview from "./PharmacyPreview/PharmacyPreview"
import {useState} from "react"

const PharmacyBuilder = () => {
    const [ingredients , setIngredients]  = useState({
        askorbinka: 15,
        trimol : 21,
        dimidrol : 12,
    })
  return (
    <div className={classes.PharmacyBuilder}>
     <PharmacyPreview ingredients={ingredients} />
     <PharmacyControls ingredients={ingredients} />
    </div>
  );
}

export default PharmacyBuilder;
