import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import dummyData from './dummyData.json'

const initialState = {
  orderDetails: {},
  productObj: {},
  loading: false,
  error: null
}

// get order details API call 
export const getOrderDetails = createAsyncThunk('getOrderDetails', async() => {
  try{
    const response = dummyData;
    return response
  } catch(err) {
    console.log(err)
    return err;
  }
})



const OrderDetailsSlice = createSlice({
  name: 'Order',
  initialState,
  reducers: {
    approveProduct: (state, action) => {
      if(state.productObj[action.payload]) {
        state.productObj[action.payload].status = 1
      }
    },
    rejectProduct: (state, action) => {
      if(state.productObj[action.payload]) {
        state.productObj[action.payload].status = 2
      }
    }
  },
  extraReducers: {
    [getOrderDetails.pending]: (state) => {
      state.loading = true;
    },
    [getOrderDetails.fulfilled]: (state, action) => {
      const tempObj = {};
      action?.payload?.products.map(item => {
        tempObj[item.product_id] = item;
      })
      state.orderDetails = action.payload;
      state.productObj = {...tempObj};
      state.loading = false;
    },
    [getOrderDetails.rejected]: (state, action) => {
      state.loading = false;
      state.orderDetails = {};
      state.productObj = {}
      state.error = action.payload
    },
  },
})

export const { approveProduct, rejectProduct } = OrderDetailsSlice.actions;

export default OrderDetailsSlice.reducer;