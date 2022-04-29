import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.total += action.payload.price * action.payload.quantity;
      state.products.push(action.payload);
    },
    deleteProduct: (state, action) => {
      const deleteId = action.payload.id;
      const index = state.products.findIndex(
        (product) => product._id === deleteId
      );
      state.products.splice(index, 1);
      state.quantity -= action.payload.quantity;
      state.total -= action.payload.price * action.payload.quantity;
    },
  },
});

export const { addProduct, deleteProduct } = cartSlice.actions;
export default cartSlice.reducer;
