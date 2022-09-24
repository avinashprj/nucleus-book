import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { toast } from "react-toastify";
import { getAllUsers } from "../../serverCalls";

export const getUsers = createAsyncThunk("/users/getUsers", async () => {
  try {
    const response = await getAllUsers();
    return response.data.users;
  } catch (error) {
    console.error(error.response.data);
  }
});

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {},
  extraReducers: {
    [getUsers.fulfilled]: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const usersReducer = usersSlice.reducer;
