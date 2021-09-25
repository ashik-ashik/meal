import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';

const Meals = () => {
  const [meals, setMeals] = useState([]);
  useEffect(()=>{
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
    .then(res => res.json())
    .then(data => setMeals(data))
  }, [meals]);
  console.log(meals)
  return (
    <article>
      
      <Meal meal={meals} />
    </article>
  );
};

export default Meals;