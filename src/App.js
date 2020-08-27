import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import Country from './components/Country/Country';
import Cart from './components/Cart/Cart';


function App() {
  const [cart,setCart] = useState([]);
  const [countries,setCountries] = useState([]);
  const addHandleCountry = (coun) => {
    const newCart = [...cart, coun];
    
    setCart(newCart);
  };

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data =>{
      setCountries(data);
    
    })
    .catch(error => console.log(error))
  },[])
  return (
    <div className="App">
      <header className="App-header">
  <h1>Country loaded:{countries.length}</h1>
  <h4>Country added:{cart.length} </h4>
  <Cart cart={cart}></Cart>
  <ul>
    {
      countries.map(coun => <Country coun={coun} handleCountry={addHandleCountry} key={coun.alpha2Code}></Country>)
    }
  
  </ul>
  
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
