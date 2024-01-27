import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { cartItems: [] };

const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
  // const result = addDecimals(3.14159);
  // console.log(result);  out: 3.14
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x._id === item._id);

      if (existItem) {
        state.cartItems = state.cartItems.map((x) =>
          x._id === existItem._id ? item : x
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }

      // Calculate items price
      state.itemsPrice = addDecimals(
        state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0));
      // Calculate shipping price (if order is over 100TL then free , else 20TL shipping)
      state.shippingPrice = addDecimals(state.itemsPrice > 300 ? 0 : 20);
      // Calculate tax price (KDV == 0.18)
      state.taxPrice = addDecimals(Number(state.itemsPrice * 0.18));
      // Calculate total price
      state.totalPrice = addDecimals(
        Number(state.taxPrice)+
        Number(state.shippingPrice)+
        Number(state.itemsPrice)
      ).toFixed(2);

      localStorage.setItem('cart',JSON.stringify(state)); 
      // Finally send to localstorage as a json obj  
    },
  },
});

export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;
