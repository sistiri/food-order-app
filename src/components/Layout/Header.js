import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";



const Header = (props) => {

  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <button className="button" onClick={props.fetchMeals}>Fetch Meals</button>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!"></img>
      </div>
    </Fragment>
  );
};

export default Header;
