import { configureStore } from "@reduxjs/toolkit";
import orderReducer from '../container/OrdersPage/OrderDetailsSlice'

export const store = configureStore({
  reducer: {
    order: orderReducer,
  }
})