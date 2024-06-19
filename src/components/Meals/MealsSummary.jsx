import classes from "./MealsSummary.module.css";

export default function MealsSummary() {
  return (
    <section className={classes.summary}>
      <h2 className={classes.h2}>Delicious Food, Delivered To You</h2>
      <p className={classes.p}>
        Ghoose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p className={classes.p}>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </section>
  );
}
