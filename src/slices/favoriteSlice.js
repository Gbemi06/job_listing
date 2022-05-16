import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    content: [],
  },
  reducers: {
    addToFavorites: (state, action) => {
      return {
        ...state,
        content: [...state.content, action.payload],
      };
    },
    deleteOneFavorite: (state, action) => {
      return {
        ...state,
        content: state.content.filter(
          (company) => company._id !== action.payload
        ),
      };
    },
  },
});

export const { addToFavorites, deleteOneFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
