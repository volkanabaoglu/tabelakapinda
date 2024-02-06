const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
    // const result = addDecimals(3.14159);
    // console.log(result);  out: 3.14
  };



export const updateCart = (state) => {
    // Calculate items price
    state.itemsPrice = addDecimals(
        state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0));
      // Calculate shipping price (if order is over 100TL then free , else 20TL shipping)
      state.shippingPrice = addDecimals(state.itemsPrice > 300 ? 0 : 20);
      // Calculate tax price (KDV == 0.18)
      state.taxPrice = addDecimals(Number(state.itemsPrice * 0.18));
      // Calculate total price
      state.totalPrice =(
        Number(state.taxPrice)+
        Number(state.shippingPrice)+
        Number(state.itemsPrice)
      ).toFixed(2);

      localStorage.setItem('cart',JSON.stringify(state)); 
      // Finally send to localstorage as a json obj  

      return state ;
}
