import { category_name_by_filter } from "@/utils/mockData/MockData";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filP: [],
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    toggleFilter: (state, action) => {
      console.log("stateStae", state);
      state.filP = action.payload;
    },
  },
});

export const { toggleFilter } = itemsSlice.actions;

export default itemsSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   selectedCategories: [], // You can start with an empty array or any initial selection.
// };

// const itemsSlice = createSlice({
//   name: 'items',
//   initialState,
//   reducers: {
//     toggleFilter: (state, action) => {
//       const { category } = action.payload; // Extract the category from the payload
//       const { selectedCategories } = state;

//       if (selectedCategories.includes(category)) {
//         // If the category is selected, unselect it
//         state.selectedCategories = selectedCategories.filter((c) => c !== category);
//       } else {
//         // If the category is not selected, select it
//         state.selectedCategories = [...selectedCategories, category];
//       }
//     },
//   },
// });

// export const { toggleFilter } = itemsSlice.actions;

// export default itemsSlice.reducer;
