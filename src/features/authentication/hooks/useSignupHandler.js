import { useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { signupUser } from "../authenticationSlice";

function useSignupHandler() {
  const { users } = useSelector((state) => state.users);
  const initialFormState = {
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
  };

  const initialErrorState = {
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
  };

  const formReducer = (state, action) => {
    switch (action.type) {
      case "INPUT_FIRST_NAME":
        return {
          ...state,
          firstName: action.payload,
        };
      case "INPUT_LAST_NAME":
        return {
          ...state,
          lastName: action.payload,
        };
      case "INPUT_EMAIL":
        return {
          ...state,
          email: action.payload,
        };
      case "INPUT_USERNAME":
        return {
          ...state,
          username: action.payload,
        };
      case "INPUT_PASSWORD":
        return {
          ...state,
          password: action.payload,
        };
      default:
        return {
          ...state,
        };
    }
  };

  const errorReducer = (state, action) => {
    switch (action.type) {
      case "ERROR_FIRST_NAME":
        return {
          ...state,
          firstName: action.payload,
        };
      case "ERROR_LAST_NAME":
        return {
          ...state,
          lastName: action.payload,
        };
      case "ERROR_EMAIL":
        return {
          ...state,
          email: action.payload,
        };
      case "ERROR_USERNAME":
        return {
          ...state,
          username: action.payload,
        };
      case "ERROR_PASSWORD":
        return {
          ...state,
          password: action.payload,
        };
      default:
        return {
          ...state,
        };
    }
  };

  const [errorData, errorDispatch] = useReducer(
    errorReducer,
    initialErrorState
  );
  const [formData, formDispatch] = useReducer(formReducer, initialFormState);
  const dispatch = useDispatch();

  const checkValidation = {
    firstName: () => {
      if (!new RegExp("^[a-zA-Z]+$").test(formData.firstName)) {
        errorDispatch({
          type: "ERROR_FIRST_NAME",
          payload: "Please enter valid First Name",
        });
        return true;
      }
      errorDispatch({
        type: "ERROR_FIRST_NAME",
        payload: "",
      });
    },
    lastName: () => {
      if (!new RegExp("^[a-zA-Z]+$").test(formData.lastName)) {
        errorDispatch({
          type: "ERROR_LAST_NAME",
          payload: "Please enter valid Last Name",
        });
        return true;
      }
      errorDispatch({
        type: "ERROR_LAST_NAME",
        payload: "",
      });
    },
    email: () => {
      if (
        !new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$").test(formData.email)
      ) {
        errorDispatch({
          type: "ERROR_EMAIL",
          payload: " Please enter valid email",
        });
        return true;
      }
      errorDispatch({
        type: "ERROR_EMAIL",
        payload: "",
      });
    },
    username: () => {
      if (!new RegExp("^[a-z0-9_.]+$").test(formData.username)) {
        errorDispatch({
          type: "ERROR_USERNAME",
          payload: "Username can contain letters, digits, _ and .",
        });
        return true;
      }
      errorDispatch({
        type: "ERROR_USERNAME",
        payload: "",
      });
    },
    password: () => {
      if (
        !new RegExp(
          "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}"
        ).test(formData.password)
      ) {
        errorDispatch({
          type: "ERROR_PASSWORD",
          payload:
            "Password should contain atleast 8 characters, 1 uppercase, 1 lowercase, 1 digit and 1 special character",
        });
        return true;
      }
      errorDispatch({
        type: "ERROR_PASSWORD",
        payload: "",
      });
    },
  };

  function callCheckValidations() {
    let flag = false;
    flag = checkValidation.firstName();
    flag = checkValidation.lastName();
    flag = checkValidation.email();
    flag = checkValidation.username();
    flag = checkValidation.password();
    return flag;
  }

  const signUpHandler = (e) => {
    e.preventDefault();
    if (callCheckValidations()) {
      toast.error("Enter Correct Data");
      return;
    }
    const userNameExists = users.find(
      (currUser) => currUser.username === formData.username
    );
    if (userNameExists) {
      toast.error("Username is taken!");
      return;
    }
    dispatch(signupUser(formData));
  };

  return {
    formData,
    formDispatch,
    errorData,
    errorDispatch,
    signUpHandler,
    checkValidation,
  };
}

export { useSignupHandler };
