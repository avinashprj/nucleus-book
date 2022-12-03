/* eslint-disable import/no-unresolved */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getAllPostsOfUserFromServer } from "../../serverCalls/postService";
import { logoutUser } from "../authentication/authenticationSlice";
import { getUser } from "../../serverCalls/userService";

export const loadUserDetails = createAsyncThunk(
  "/profile/loadUserDetails",
  async (username, { rejectWithValue }) => {
    try {
      const response = await getUser(username);
      console.log("🚀 ~ file: profileSlice.js:13 ~ response", response);

      return response.data.user;
    } catch (error) {
      console.error(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export const loadUserPosts = createAsyncThunk(
  "/profile/loadUserPosts",
  async (username, { rejectWithValue }) => {
    try {
      const response = await getAllPostsOfUserFromServer(username);
      return response.data.posts;
    } catch (error) {
      console.error(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    profileDetails: null,
    postsDetails: [],
  },
  reducers: {},
  extraReducers: {
    [logoutUser]: (state) => {
      state.profileDetails = null;
      state.postsDetails = [];
    },
    [loadUserDetails.fulfilled]: (state, action) => {
      state.profileDetails = action.payload;
    },
    [loadUserDetails.rejected]: (state, action) => {
      console.error(action.payload);
    },
    [loadUserPosts.fulfilled]: (state, action) => {
      state.postsDetails = action.payload;
    },
    [loadUserPosts.rejected]: (state, action) => {
      console.error(action.payload);
    },
  },
});

export const profileReducer = profileSlice.reducer;
export const { resetProfile } = profileSlice.actions;
