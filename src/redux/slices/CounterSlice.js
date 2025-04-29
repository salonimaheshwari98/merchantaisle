import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    value:0,
}
// creating slice
export const CounterSlice = createSlice({
    name:"counter",
    initialState,
    reducers: {
        // arrow function ka use kr liya aur state se value nikal ke increment kr diya
        increment :(state) =>{
            state.value+= 1;
        },

        decrement :(state) =>{
            state.value-= 1;
        }
    }

})
// if we want any function to export fron reducer thn we use actions property because function of reducer store in reduicer
//Action creator are generate for each case reducer function
// create slice provide us two thing reducer and action createar
export const {increment,decrement} = CounterSlice.actions;
export default CounterSlice.reducer;
