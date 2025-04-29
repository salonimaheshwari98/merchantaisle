


// react form
// in normal htlm we need to first accumlate the data and send tp api 
// but in react form we not need to accumlate the datta here using usestate hooks we parallely change and update the data of field and send the data directly to api without accumlation

import './App.css';
import React from 'react';
import Counter from './components/Counter';
import Navbar from "./components/Navbar"
import { Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
function App() {
  
  return (
    <div className='App'>
        
         {/* <Counter/> */}
         <div>
          <Navbar/>
         </div>

         {/* creating route for home and cart */}
         <Routes>
          <Route path="/" element ={<Home/>}/>
          <Route path="/cart" element ={<Cart/>}/>
          
         </Routes>
        
   </div>

  );
}

export default App;

//createing slice in redux
// in slice we hAve to craete three thing
// name, initail value,reducer this done by createSlice
// creating store in redux
// wrap app in provider to connent to react
// then you can apply redux in app

// for all we download redux toolkit


