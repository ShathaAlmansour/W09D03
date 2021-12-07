const insitialState = {
  user: null,
  token: "",
};

const singnIn = (state = insitialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "LOGIN":
      const { user, token } = payload;
      localStorage.setItem("token", token);
      return { user, token };

    case "LOGOUT":
      localStorage.clear();
      return { user: null, token: "" };

    default:
      return state;
  }
};

export default singnIn;

export const login = (data) => {
  return {
    type: "LOGIN",
    payload: data,
  };
};
export const logout = (data) => {
  return {
    type: "LOGOUT",
    payload: data,
  };
};
