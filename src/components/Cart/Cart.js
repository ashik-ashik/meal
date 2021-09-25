import React from 'react';
import "./Cart.css"
// import { useState } from 'react/cjs/react.development';

const Cart = props => {
  // const [added, setAdded] = useState([])
  // useEffect(()=> {
  //   const newAdded = props.cart.map(cart => cart);
  //   setAdded(newAdded);
  // }, [props.cart])
  // // props.cart.map(cart => console.log(cart));
  let demoTital = '';
  if(!props.added){
    demoTital = 'No Items added!';
  }
  return (
    <div className="cart-item">
      <h4>{props.added.strMeal || demoTital}</h4>
    </div>
  );
};

export default Cart;