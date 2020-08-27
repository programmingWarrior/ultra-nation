import React from 'react';
import './cart.css'

const Cart = (props) => {
    const carts = props.cart;
    

   
    let totalPopulation = 0;
    for (let i = 0; i < carts.length; i++) {
        const unit = carts[i];
        totalPopulation = totalPopulation + unit.population;
        
    }
        return (
        <div>
            <h1>This is Cart:{carts.length}</h1>
            <p>Total Population:{totalPopulation}</p>
        {
            <p>Capital:{carts.capital}</p>
        }
        </div>
    );
};

export default Cart;