import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = () =>{
    return(
        <button classname={classes.button}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>Your cart</span>
            <span className={classes.badge}>4</span>
        </button>
    );

};
export default HeaderCartButton;