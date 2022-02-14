import { Fragment, useEffect, useState } from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = (props) => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(false);

  const apiURL =
    "https://food-order-app-255b2-default-rtdb.europe-west1.firebasedatabase.app/DUMMY_MEALS.json"

  useEffect(() => {
    // try {
      const fetchAvailableMeals = async () => {
        setIsLoading(true);
        const response = await fetch(apiURL);
        const responseData = await response.json();
        console.log(responseData);
        const loadedMeals = [];
        for (const key in responseData) {
          loadedMeals.push({
            id: responseData[key].id,
            name: responseData[key].name,
            description: responseData[key].description,
            price: responseData[key].price,
          });
        }
        
        setMeals(loadedMeals);
        setIsLoading(false);
        console.log(loadedMeals);
      };
      fetchAvailableMeals();
    // } catch (error) {
    //   setError(true);
      // throw error("Error in loading!");
      // console.log(error)
    // }
  }, []);

  // if (error) {
  //   return <p className={classes.loading}>Error in loading!</p>;
  // }

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <Fragment>
      {isLoading ? (
        <p className={classes.loading}>Loading...</p>
      ) : (
        <section className={classes.meals}>
          <Card>
            <ul>{mealsList}</ul>
          </Card>
        </section>
      )}
    </Fragment>
  );
};

export default AvailableMeals;
