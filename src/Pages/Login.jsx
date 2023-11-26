import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import style from "../assets/style/Login.module.css";
import { useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
function Login({ users, setUsers }) {
  const [loginName, setLoginName] = useState("");
  const [loginPass, setLoginPass] = useState("");
  let navigate = useNavigate();
  return (
    <div className={style.container}>
      <h1 className={style.text}>Login</h1>
      <TextField
        onChange={(e) => {
          setLoginName(e.target.value);
        }}
        helperText=""
        id="demo-helper-text-aligned"
        label="Enter your username"
      />
      <TextField
        onChange={(e) => {
          setLoginPass(e.target.value);
        }}
        helperText=""
        id="demo-helper-text-aligned-no-helper"
        label="Enter your password"
        type="password"
      />
      <Button
        onClick={() => {
          if (loginName && loginPass) {
            let loginFind = users.find(
              (elem) => elem.username == loginName && elem.password == loginPass
            );
            if (loginFind) {
              // console.log("object");
              localStorage.setItem("login", JSON.stringify(loginFind));
              navigate("/");
            } else {
              alert("User not found!");
            }
          } else {
            alert("input is empty");
          }
        }}
        variant="contained"
      >
        Login
      </Button>
      <Button
        onClick={() => {
          navigate("/register");
        }}
        variant="outlined"
      >
        Register
      </Button>
    </div>
  );
}

export default Login;
