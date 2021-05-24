import classes from "./Switch.module.css";

const Switch = ({ switchFilling }) => {
  //switchfilling switchfillingcallback

  const inpF1 = (
    <input
      type="radio"
      id="F1"
      name="fil"
      onChange={() => switchFilling("F1")}
    />
  );

  const inpNoN = (
    <input
      type="radio"
      id="none"
      name="fil"
      onChange={() => switchFilling("")}
    />
  );

  const inpF2 = (
    <input
      type="radio"
      id="F2"
      name="fil"
      onChange={() => switchFilling("F2")}
    />
  );

  return (
    <div className={classes.Switch}>
      <div className={classes.inp}>
        <label htmlFor="F1">p-kill</label>
        {inpF1}
      </div>
      <div className={classes.inp}>
        <label htmlFor="none">vit</label>
        {inpNoN}
      </div>
      <div className={classes.inp}>
        <label htmlFor="F2">flu</label>
        {inpF2}
      </div>
    </div>
  );
};

export default Switch;