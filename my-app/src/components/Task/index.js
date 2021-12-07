import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

const URL = "http://localhost:5000";

const Task = () => {
  const [token, setToken] = useState("");
  const [role, setRole] = useState("");
  const [id, setId] = useState("");
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    const storgToken = localStorage.getItem("token");
    setToken(storgToken);
    const storgrole = localStorage.getItem("role");
    setRole(storgrole);
    const storgid = localStorage.getItem("Id");
    setId(storgid);
    gettasks(storgToken);
  });

  const gettasks = async (token) => {
    try {
      const res = await axios.get(`${URL}/tasks`, {
        headers: {
          Authorization: `Brarer ${token}`,
        },
      });
      setTasks(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addtask = async () => {
    try {
      await axios.post(
        `${URL}/task`,
        {
          name: task,
        },
        {
          headers: {
            Authorization: `bearer ${token}`,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
    gettasks(token);
  };

  const logout = () => {
    localStorage.clear();
  };

  const updatetaks = async (id) => {
    try {
      const { value: updatetask } = await Swal.fire({
        title: "Updated task",
        input: "text",
        inputPlaceholder: "Input the new task",
        showCancelButton: true,
        confirmButtonColor: "#006d77",
        reverseButtons: true,
      });
      if (updatetask) {
        await axios.put(
          `${URL}/tasksupdeta/${id}`,
          {
            name: updatetask,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        gettasks(token);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const deletetask = async (id) => {
    try {
      await axios.delete(`${URL}/taskdelet/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      gettasks(token);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="wrapper">
        {!token ? (
          <h1>
            You are not logeddin yet, so <Link to="/login">login</Link> or{" "}
            <Link to="/signup">signup</Link>
          </h1>
        ) : (
          <div className="ItemsCon">
            <div>
              <input
                onChange={(e) => setTask(e.target.value)}
                placeholder="Add a new todo"
              />
              <button onClick={addtask}>ADD</button>
              <button onClick={logout}>logout</button>
            </div>
            {tasks.length ? (
              <ul>
                {tasks.map((todo) => (
                  <div key={todo._id} className="listItem">
                    <li>{todo.name}</li>
                    <div>
                      <button onClick={() => updatetaks(todo._id)}>
                        Update
                      </button>
                      <button onClick={() => deletetask(todo._id)}>
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </ul>
            ) : (
              <h2> No task</h2>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Task;
