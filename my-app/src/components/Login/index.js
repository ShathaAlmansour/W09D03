import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import Task from "../Task";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../reducers/login";
const BASE_URL = process.env.REACT_APP_BASE_URL
const Login = () => {
  const state = useSelector((state) => {
    return {
      singnIn: state.singnIn,
    };
  });
  console.log(state);
  console.log(state.singnIn);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [tokenLocal, setTokenLocal] = useState();
  const backTOreg = () => {
    navigate("/Register");
  };
  const logIn = async (vil) => {
    vil.preventDefault();
    // console.log(URL);
    const res = await axios.post(`${BASE_URL}/login`, {
      email: email,
      password: password,
    });

    const data = {
      user: res.data.result,
      token: res.data.result,
    };
    // console.log("data",data);
    dispatch(login({ data }));

    if (res) {
      localStorage.setItem("role", res.data.result.role);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("id", res.data.result._id);

      const local = localStorage.getItem("token");
      setTokenLocal(local);
    }
  };
  return (
    <div>
      {tokenLocal ? (
        <Task />
      ) : (
        <>
          {" "}
          <h1>Login</h1>
          <form onSubmit={logIn}>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              type="submit"
              value="Login"
              id="loginBtn"
              className="btn btn-primary"
            />
          </form>
          <p onClick={backTOreg}>Not have an account ?</p>{" "}
        </>
      )}
    </div>
  );
};

export default Login;
