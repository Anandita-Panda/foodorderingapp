import{Fragment} from "react";
import classes from "./Header.module.css";
import mainheaderImage from "../../assets/headerImg.avif";        
import HeaderCartButton from "./HeaderCartButton";

const Header =()=>
{
    return(
        <Fragment>

            <header className={classes.header}>
                <h1>Daawat</h1>
                <HeaderCartButton/>
            </header>

            <div className={classes["main-image"]}>
                <img src={mainheaderImage} alt="image"></img>
            </div>

        </Fragment>
    );

};
export default Header;
