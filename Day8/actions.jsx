export const login = (formData) => (dispatch) => {
    if (formData.username === "admin" && formData.password === "password") {
      dispatch({ type: "LOGIN_SUCCESS" });
    } else {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };
  