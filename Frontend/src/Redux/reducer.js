import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    email: "",
    watchlist: [],
    likes: []
  },
  reducers: {
    set_username: (state, action) => {
      state.email = action.payload
    },
    set_watchlist: (state, action) => {
      state.watchlist.push(action.payload)
    },
    reset_watchlist: (state, action) => {
      const index = state.watchlist.indexOf(action.payload);
      state.watchlist.splice(index, 1);
    },
    set_likes: (state, action) => {
        state.likes.push(action.payload)
    },
    reset_likes: (state, action) => {
      const index = state.likes.indexOf(action.payload);
      state.likes.splice(index, 1);
    }
  },
})

export const {set_username, set_watchlist, reset_watchlist, set_likes, reset_likes} = userSlice.actions;
export const select_user_email = (state) => state.user.email;
export const select_user_watchlist = (state) => state.user.watchlist;
export const select_user_likes = (state) => state.user.likes;

export default userSlice.reducer
