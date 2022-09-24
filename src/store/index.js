import { configureStore } from "@reduxjs/toolkit";
import { authenticationReducer } from "../features/authentication/authenticationSlice";
import { usersReducer } from "../features/main/usersSlice";

export const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    users: usersReducer,
  },
});
