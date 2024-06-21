import { useContext } from "react";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";

import classes from "./Cart.module.css";

import CartContext from "../../store/CartContext";

export default function Cart(props) {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const onAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const onRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItem = (
    <ul className={classes.cart}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={onAddHandler.bind(null, item)}
          onRemove={onRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClick={props.onHideCart}>
      {cartItem}
      <div className={classes.total}>
        <span>Total amount:</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["buttonAlt"]} onClick={props.onHideCart}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
}
