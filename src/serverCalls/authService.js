import axios from "axios";

const postLoginData = (username, password) =>
  axios.post("/api/auth/login", {
    username,
    password,
  });

const postSignupData = (formData) =>
  axios.post("/api/auth/signup", {
    ...formData,
    bio: "",
    website: "",
    avatarURL: "",
  });

export { postLoginData, postSignupData };
