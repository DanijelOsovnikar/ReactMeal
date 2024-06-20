import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

export default function Cart(props) {
  const cartItem = (
    <ul className={classes.cart}>
      {[{ id: "m6", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClick={props.onHideCart}>
      {cartItem}
      <div className={classes.total}>
        <span>Total amount:</span>
        <span>35.69</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["buttonAlt"]} onClick={props.onHideCart}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
}
