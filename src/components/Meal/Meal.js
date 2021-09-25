import React from 'react';
import "./Meals.css"
const Meal = props => {
  
    // console.log(props.meal)
    const {idMeal, strMeal, strInstructions, strMealThumb, strCategory, strTags, strMeasure1} = props.meal;
  return (
    <div className='meal'>
      <img src={strMealThumb} alt="" />
      <h4>{strMeal}</h4>
      <h5>Categories: {strCategory}</h5>
      <small>Tags: {strTags ? strTags : "No Tags"}</small>
      <p><strong>Mesures: {strMeasure1}</strong></p>
      <p>{strInstructions.slice(0, 100)}...</p>
      <button onClick={() => props.addToCart(idMeal)} className="add-to-cart">Add To Cart</button>
    </div>
  );
};

export default Meal;