import { useEffect, useState } from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = (props) => {
  const [meals, setMeals] = useState([]);

  const apiURL =
    "https://food-order-app-255b2-default-rtdb.europe-west1.firebasedatabase.app/DUMMY_MEALS.json";

  useEffect(() => {
    const fetchAvailableMeals = async () => {
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
      console.log(loadedMeals);
    };
    fetchAvailableMeals();
  }, [props.url]);

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
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
