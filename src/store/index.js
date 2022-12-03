import { configureStore } from "@reduxjs/toolkit";
import { authenticationReducer } from "../features/authentication/authenticationSlice";
import { usersReducer } from "../features/home/usersSlice";
import { postsReducer } from "../features/home/postsSlice";
import { profileReducer } from "../features/profile/profileSlice";

export const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    users: usersReducer,
    profile: profileReducer,
    posts: postsReducer,
  },
});
