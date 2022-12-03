import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  logoutUser,
  editUserProfile,
} from "../authentication/authenticationSlice";
import { getAllUsers } from "../../serverCalls";
import {
  followUserInServer,
  unfollowUserInServer,
} from "../../serverCalls/followService";

export const getUsers = createAsyncThunk("/users/getUsers", async () => {
  try {
    const response = await getAllUsers();
    return response.data.users;
  } catch (error) {
    console.error(error.response.data);
  }
});
export const followUser = createAsyncThunk(
  "/users/followUser",
  async ({ followUserId, authToken, dispatch }, { rejectWithValue }) => {
    try {
      const response = await followUserInServer(followUserId, authToken);
      dispatch(editUserProfile({ userDetails: response.data.user, authToken }));
      return response.data;
    } catch (error) {
      console.error(error.response.data);
      toast.error("Couldn't follow user!");
      return rejectWithValue(error.response.data);
    }
  }
);

export const unfollowUser = createAsyncThunk(
  "/users/unfollowUser",
  async ({ followUserId, authToken, dispatch }, { rejectWithValue }) => {
    try {
      const response = await unfollowUserInServer(followUserId, authToken);
      dispatch(editUserProfile({ userDetails: response.data.user, authToken }));
      return response.data;
    } catch (error) {
      console.error(error.response.data);
      toast.error("Couldn't unfollow user!");
      return rejectWithValue(error.response.data);
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    followStatus: "idle",
  },
  reducers: {},
  extraReducers: {
    [logoutUser]: (state) => {
      state.users = [];
    },
    [getUsers.fulfilled]: (state, action) => {
      state.users = action.payload;
    },
    [followUser.fulfilled]: (state, action) => {
      state.users = [...state.users].map((currUser) =>
        currUser._id === action.payload.followUser._id
          ? action.payload.followUser
          : currUser
      );
      state.followStatus = "fulfilled";
    },
    [followUser.pending]: (state, action) => {
      state.followStatus = "pending";
    },
    [followUser.rejected]: (state, action) => {
      console.error(action.payload);
      state.followStatus = "idle";
    },
    [unfollowUser.fulfilled]: (state, action) => {
      state.users = [...state.users].map((currUser) =>
        currUser._id === action.payload.followUser._id
          ? action.payload.followUser
          : currUser
      );
      state.followStatus = "fulfilled";
    },
    [unfollowUser.pending]: (state, action) => {
      state.followStatus = "pending";
    },
    [unfollowUser.rejected]: (state, action) => {
      console.error(action.payload);
      state.followStatus = "idle";
    },
  },
});

export const usersReducer = usersSlice.reducer;
