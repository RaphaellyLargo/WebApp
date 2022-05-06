import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Order some delicious Food</h2>
      <p>
        Choose your meal from our selection of top meals to enjoy at home :)
      </p>
      <p>
        The meals are cooked with high quality and mostly local ingredients -
        just for you.
      </p>
    </section>
  );
};

export default MealsSummary;
