import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Layouts from "./Pages/Layouts";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Requests from "./Pages/Requests";
import Users from "./Pages/Users";
import { getAllUsers } from "./middleware/api/users";

import Friends from "./Pages/Friends";
import Blocked from "./Pages/Blocked";
function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllUsers().then((res) => {
      setUsers(res);
    });
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layouts />}>
            <Route
              index
              element={<Users users={users} setUsers={setUsers} />}
            />
            <Route
              path="register"
              element={<Register users={users} setUsers={setUsers} />}
            />
            <Route
              path="blocked"
              element={<Blocked users={users} setUsers={setUsers} />}
            />
            <Route
              path="requests"
              element={<Requests users={users} setUsers={setUsers} />}
            />
            <Route
              path="login"
              element={<Login users={users} setUsers={setUsers} />}
            />
            <Route
              path="friends"
              element={<Friends users={users} setUsers={setUsers} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
