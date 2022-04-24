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
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    deleteProduct: (state, action) => {
      const deleteId = action.payload.id;
      console.log(action.payload.value);
      const index = state.products.findIndex(
        (product) => product._id === deleteId
      );
      state.products.splice(index, 1);
      // state.quantityも減らす
      // state.totalも減らす
    },
  },
});

export const { addProduct, deleteProduct } = cartSlice.actions;
export default cartSlice.reducer;
