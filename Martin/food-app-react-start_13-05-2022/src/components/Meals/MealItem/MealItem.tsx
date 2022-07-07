import { useContext } from "react";
import { Meal } from "../../../App";
import CartContext from "../../../store/cart-context";
import "./MealItem.css";
import MealItemForm from "./MealItemForm";

interface MealItemProps {
  meal: Meal;
}

export default function MealItem(props: MealItemProps) {
  const cartCtx = useContext(CartContext);

  function addToCartHandler(amount: number){
    cartCtx.addItem({
      id: props.meal.id,
      name: props.meal.name,
      amount: amount,
      price: props.meal.price
    });
  }

  return (
    <li className="meal-item">
      <div>
        <h3>{props.meal.name}</h3>
        <div className="description">{props.meal.description}</div>
        <div className="price">€{props.meal.price}</div>
      </div>
      <MealItemForm
        meal={props.meal}
        onAddToCart={addToCartHandler}
      ></MealItemForm>
    </li>
  );
}
