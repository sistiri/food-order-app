import React, { useEffect, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState("false");
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
  }, []);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals meals={meals} />
      </main>
    </CartProvider>
  );
}

export default App;
