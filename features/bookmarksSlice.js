import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookmarkedIds: [], // store paper IDs only
};

const bookmarksSlice = createSlice({
  name: "bookmarks",
  initialState,
  reducers: {
    toggleBookmark: (state, action) => {
      const id = action.payload;
      
      if (state.bookmarkedIds.includes(id)) {
        state.bookmarkedIds = state.bookmarkedIds.filter(
          (existingId) => existingId !== id
        );
      } else {
        state.bookmarkedIds.push(id);
      }
    },
  },
});

export const { toggleBookmark } = bookmarksSlice.actions;
export default bookmarksSlice.reducer;
