import { createSlice } from "@reduxjs/toolkit";


  
export const CartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        add:(state,action)=>{
            // reducer function take two input state and action
            // action.payload is used to accept the input send in functioni.e props
          state.push(action.payload);
        },

        remove : (state,action)=>{
            return state.filter((item)=> item.id !== action.payload);
        },

        clearCart: (state,action) => {
            state.pop(action.payload)
          },
        
    }
});

export const {add,remove,clearCart} = CartSlice.actions;
export default CartSlice.reducer;