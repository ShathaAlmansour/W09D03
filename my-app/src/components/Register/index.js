import { React, useState } from "react";
import axios from "axios";
const URL = "http://localhost:5000";

const Register = () => {
  const [logemail, setLogemail] = useState();
  const [logpassword, setLogpassword] = useState();
  const [logrole, setLogrole] = useState();
  // بداية فانكشن تسجيل يوزر جديد
  const register = async (val) => {
    const result = await axios.post(`${URL}/resgister`, {
      email: logemail,
      password: logpassword,
      role: "61a5fa2d4812057febe9c138",
    });
    console.log(result);
  };

  return (
    <section>
      <div>
        <form>
          <div>
            <input
              type="email"
              name="email"
              placeholder="email"
              onChange={(val) => {
                // console.log(val.target.value);
                setLogemail(val.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="password"
              onChange={(val) => {
                setLogpassword(val.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="role"
              name="role"
              placeholder="role"
              onChange={(val) => {
                setLogrole(val.target.value);
              }}
            />
          </div>
        </form>

        <button onClick={register}>login</button>
      </div>
    </section>
  );
};

export default Register;