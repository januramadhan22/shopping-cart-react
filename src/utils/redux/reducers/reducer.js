import { createSlice } from "@reduxjs/toolkit";

const data = [
  {
    id: 1,
    productName: "Blue Denim Shirt",
    productType: "Shirt",
    image:
      "https://images.unsplash.com/photo-1604006852563-e8b846baca6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGJsdWUlMjBzaGlydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    size: "M",
    color: "Blue",
    price: "17",
    amount: 1,
  },
  {
    id: 2,
    productName: "Red Hoodie",
    productType: "Hoodie",
    image:
      "https://images.unsplash.com/photo-1625024573124-57a3efa69d7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVkJTIwaG9vZGllfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    size: "M",
    color: "Red",
    price: "35",
    amount: 1,
  },
  {
    id: 3,
    productName: "Black Jeans",
    productType: "Jeans",
    image:
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJsYWNrJTIwamVhbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    size: "XL",
    color: "Black",
    price: "45",
    amount: 1,
  },
];

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: data,
    totalAmount: 0,
    totalCount: 0,
  },
  reducers: {
    getCartTotal: (state) => {
      let { totalAmount, totalCount } = state.items.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          const totalPrice = price * amount;
          cartTotal.totalAmount += totalPrice; //for total price of items
          cartTotal.totalCount += amount; //for total quantity of items
          return cartTotal;
        },
        { totalAmount: 0, totalCount: 0 }
      );
      state.totalAmount = parseInt(totalAmount.toFixed(2));
      state.totalCount = totalCount;
    },
    addQuantity: (state, action) => {
      state.items = state.items.map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });
    },
    decQuantity: (state, action) => {
      state.items = state.items.map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      });
      // .filter((item) => item.amount !== 0);
      // action for delete if amount is < 1
    },
    removeItems: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { getCartTotal, addQuantity, decQuantity, removeItems } =
  cartSlice.actions;

export default cartSlice.reducer;
