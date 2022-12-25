import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css"

const HeaderCartButton = props => {
    console.log(':: HEADER BUTTON USING CONTEXT ::');
    const cartCtx = useContext(CartContext);
    
    const  numberOfItems = cartCtx.items.reduce((acc, curr) => acc + curr.amount, 0);

    return <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>
            Your Cart
        </span>
        <span className={classes.badge}>
            {numberOfItems}
        </span>
    </button>
};

export default HeaderCartButton;