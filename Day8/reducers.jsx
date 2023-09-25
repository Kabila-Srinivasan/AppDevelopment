const initialState = {
    loggedIn: false,
    error: "",
  };
  
  const loginReducer = (state = initialState, action) => {
    switch (action.type) {
      case "LOGIN_SUCCESS":
        return {
          ...state,
          loggedIn: true,
          error: "",
        };
      case "LOGIN_FAILURE":
        return {
          ...state,
          loggedIn: false,
          error: "Invalid username or password",
        };
      default:
        return state;
    }
  };
  
  export default loginReducer;
  