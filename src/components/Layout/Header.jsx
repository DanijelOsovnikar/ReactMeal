import mealsImg from "../../assets/pexels-ella-olsson-572949-1640774.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

export default function Header(props) {
  return (
    <>
      <header className={classes.header}>
        <nav className={classes.nav}>
          <h1>ReactMeals</h1>
          <HeaderCartButton onClick={props.onShowCart} />
        </nav>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="mealsImage" />
      </div>
    </>
  );
}
