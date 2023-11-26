import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import style from "../assets/style/Register.module.css";
import { useNavigate } from "react-router-dom";
import { postUsers } from "../middleware/api/users";
function Register({ users, setUsers }) {
  const [registerName, setRegisterName] = useState("");
  const [registerPass, setRegisterPass] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");

  let navigate = useNavigate();
  return (
    <div className={style.container}>
      <h1 className={style.text}>Register</h1>
      <TextField
        onChange={(e) => {
          setRegisterName(e.target.value);
        }}
        helperText=""
        id="demo-helper-text-aligned"
        label="Enter Username"
      />
      <TextField
        onChange={(e) => {
          setRegisterPass(e.target.value);
        }}
        helperText=""
        id="demo-helper-text-aligned-no-helper"
        label="Enter password"
        type="password"
      />
      <TextField
        onChange={(e) => {
          setRegisterEmail(e.target.value);
        }}
        helperText=""
        id="demo-helper-text-alignede"
        label="Enter email"
        type="email"
      />
      <Button
        onClick={() => {
          if (!registerName || !registerEmail || !registerPass) {
            alert("Input is empty!");
          } else {
            let findUsername = users.find(
              (elem) => elem.username == registerName
            );
            let findEmail = users.find((elem) => elem.email == registerEmail);
            if (findUsername) {
              alert("This Username already used!");
            } else if (findEmail) {
              alert("This Email already used!");
            } else if (!/[A-Z]/.test(registerPass)) {
              alert("Password must contain at least 1 capital letter");
            } else {
              let obj = {
                username: registerName,
                password: registerPass,
                email: registerEmail,
                requests: [],
                friends: [],
                block: [],
              };
              postUsers(obj).then((res) => {
                // console.log(res);
              });
              navigate("/login");
            }
          }
        }}
        variant="contained"
      >
        Register
      </Button>
      <Button
        onClick={() => {
          navigate("/login");
        }}
        variant="outlined"
      >
        Login
      </Button>
    </div>
  );
}

export default Register;
