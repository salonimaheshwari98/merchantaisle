import { configureStore } from '@reduxjs/toolkit'
// import CounterSlice from './slices/CounterSlice'
import { CartSlice } from './slices/cartSlice'
// configureStore is function that create global store i.e  centralised store
export const store = configureStore({
  reducer: {
   
    cart:CartSlice.reducer
  },
})