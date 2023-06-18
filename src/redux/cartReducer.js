import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "shoppingCart",
  initialState: {
    value: [],
  },
  reducers: {
    Add_To_Cart: (state, actions) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      console.log("hhh...////", actions.payload);
      let filter = state.value.filter((item) => {});
      state.value.push(actions.payload);
    },
    Remove_From_Cart: (state) => {
      state.value -= 1;
    },
    Cart_Qauntity: (index) => {
      index.value = +1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { Add_To_Cart, Remove_From_Cart, Cart_Qauntity } =
  cartSlice.actions;

export default cartSlice.reducer;
