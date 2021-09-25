import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import { SubHeader } from '../Header/Header';
import Meal from '../Meal/Meal';
import "./Meals.css"

const Meals = () => {
  const [meals, setMeals] = useState([]);
  const [searched, setSearched] = useState([]);
  useEffect(()=>{
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
    .then(res => res.json())
    .then(data => {setMeals(data.meals); setSearched(data.meals)})
  }, []);
  // console.log(meals)

  // add to cart
  const [addMeals, setAddMeals] = useState([])
  const handelAddToCart = id => {
    const matchedMeals = meals.filter(meal => meal.idMeal === id);
    if(matchedMeals.idMeal && !matchedMeals.qty){
      addMeals.find(added => added.idMeal === matchedMeals.idMeal);
      matchedMeals.qty = 1;
    }else if(matchedMeals.qty){
      matchedMeals.qty = matchedMeals.qty + 1;
    }
      const newCarts = [...addMeals, matchedMeals[0]];
    setAddMeals(newCarts);
    console.log(addMeals)
  }
  // search er kahini suru
  const searching = event => {
    const searchKey = (event.target.value);
    const searchResult = meals.filter(meal => meal.strCategory.toLowerCase().includes(searchKey.toLowerCase()))
    setSearched(searchResult)
  }
  return (
    <article className="meals">
      <SubHeader search={searching} />
      <div className="container meals-container">
        <div className="all-meals">
        {
        
        searched.map(mm => <Meal key={mm.idMeal} meal={mm} addToCart={handelAddToCart} />)
        }
        </div>
        <aside className="meals-sidebar">
          <div className="carts">
            {
              addMeals.map(added => <Cart key={added.idMeal} added={added} />)
            }
          </div>
        </aside>
      </div>

    </article>
  );
};

export default Meals;