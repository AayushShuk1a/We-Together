export const loginStart = () => ({
    type: "LOGIN_START",
  });
  
  export const loginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user,
  });
  
  export const Failure = () => ({
    type: "FAILURE",
  });
  
  export const Logout = () => ({
    type: "LOGOUT",
  });