import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState("false");
  const [meals, setMeals] = useState([]);
  
const apiURL = 'https://food-order-app-255b2-default-rtdb.europe-west1.firebasedatabase.app/DUMMY_MEALS.json'

const fetchAvailableMealsHandler = async () => {
  const response = await fetch(apiURL);
  const data = await response.json();
  console.log(data)
  const loadedMeals = []

  for ( const key in data ) {
    loadedMeals.push({
        id: data[key].id,
        name:data[key].name,
        description: data[key].description,
        price: data[key].price
    })
    
  }
  console.log(loadedMeals)
  setMeals(loadedMeals)
}

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} fetchMeals={fetchAvailableMealsHandler}/>
      <main>
        <Meals meals={meals} />
      </main>
    </CartProvider>
  );
}

export default App;
