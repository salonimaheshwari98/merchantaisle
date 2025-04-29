


// react form
// in normal htlm we need to first accumlate the data and send tp api 
// but in react form we not need to accumlate the datta here using usestate hooks we parallely change and update the data of field and send the data directly to api without accumlation


import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../redux/slices/CounterSlice';


function Counter() {
  // useSlector is used to fetch the data/any variable from slice
  // here we call a function inside useSlector and acsses using state.slinename.variable
  // aur ishki call pehle store me jati hai then slice me

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  // useDispatch hook is used to  all the function from action insight of slice 
  return (
    <div className='Container'>
           
         <button onClick={() =>dispatch(increment())}>
            Increment
         </button>
         <br/>
         <br/>
         <div>{count}</div>
         <br/>
         <br/>
         <button onClick={() =>dispatch(decrement())}>
            Decrement
         </button>
         
   </div>
   
  );
}  

export default Counter;

