import "./App.css";
import { React, Route, Routes, Link } from "react-router-dom";
import Login from "./components/Login";
import Task from "./components/Task";
import Register from "./components/Register";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/task" element={<Task />} />
      </Routes>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
      <Link to="/task">Task</Link>
    </div>
  );
}

export default App;
