import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { cartItems: [] };

const addDecimals = (num) => {
    return (Math.round(num * 100)/100).toFixed(2);
}
// const result = addDecimals(3.14159);
// console.log(result);  out: 3.14


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
      state.itemsPrice = addDecimals(state.cartItems.reduce(
        (acc, item) => acc + item.price * item.qty,
        0));
      // Calculate shipping price (if order is over 100TL then free , else 10TL shipping)
        state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 10);
      // Calculate tax price
        state.taxPrice = addDecimals()
      // Calculate total price
    },
  },
});

export default cartSlice.reducer;
