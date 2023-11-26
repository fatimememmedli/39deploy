import React, { useState } from "react";
import style from "../assets/style/UserCards.module.css";
import { Button } from "@mui/material";
import axios from "axios";
function UserCards({ user, blocked, setBlocked }) {
  let loginInfo = JSON.parse(localStorage.getItem("login"));
  const [request, setRequest] = useState(false);

  return (
    <div className={style.container}>
      <div className={style.card}>
        <div className={style.imageName}>
          <div className={style.image}>
            <img
              src="https://www.pinclipart.com/picdir/big/73-739007_icon-profile-picture-circle-png-clipart.png"
              alt=""
            />
          </div>
          <div className={style.text}>{user.username}</div>
        </div>
        <div className={style.buttons}>
          {user.friends.find((element) => element.id == loginInfo.id) ? (
            <Button variant="outlined" color="secondary">
              Your Friend
            </Button>
          ) : !user.requests.find((elem) => elem.id == loginInfo.id) &&
            !request ? (
            <Button
              onClick={() => {
                console.log(user);
                let RequestArr = user.requests;
                RequestArr.push(loginInfo);

                console.log(RequestArr);
                fetch(`http://localhost:3000/users/${user.id}`, {
                  method: "PATCH",
                  body: JSON.stringify({
                    requests: RequestArr,
                  }),
                  headers: {
                    "Content-type": "application/json; charset=UTF-8",
                  },
                });

                setRequest((request) => !request);
              }}
              variant="contained"
            >
              Follow
            </Button>
          ) : (
            <Button
              onClick={() => {
                let arr = user.requests.filter((req) => req.id != loginInfo.id);
                user.requests = arr;
                console.log(user.requests);
                fetch(`http://localhost:3000/users/${user.id}`, {
                  method: "PATCH",
                  body: JSON.stringify({
                    requests: arr,
                  }),
                  headers: {
                    "Content-type": "application/json; charset=UTF-8",
                  },
                });

                setRequest((requ) => !requ);
              }}
              variant="outlined"
              color="success"
            >
              Requested
            </Button>
          )}

          <Button
            onClick={() => {
              if (loginInfo.block.find((y) => y.id == user.id)) {
                let filter = loginInfo.block.filter((x) => x.id != user.id);
                loginInfo.block = filter;
                console.log(loginInfo.block);
                localStorage.setItem("login", JSON.stringify(loginInfo));
              } else {
                let localBlock = loginInfo.block;
                console.log(localBlock);
                let arrays = [];
                if (localBlock) {
                  arrays = localBlock;
                }

                arrays = [...localBlock, user];
                console.log(arrays);
                setBlocked([...arrays]);
                // console.log(arr);
                loginInfo.block = [...localBlock, user];
                console.log(loginInfo);
                localStorage.setItem("login", JSON.stringify(loginInfo));
                fetch(`http://localhost:3000/users/${loginInfo.id}`, {
                  method: "PATCH",
                  body: JSON.stringify({
                    block: arrays,
                  }),
                  headers: {
                    "Content-type": "application/json; charset=UTF-8",
                  },
                });
              }
            }}
            variant="outlined"
          >
            Block
          </Button>
        </div>
      </div>
    </div>
  );
}

export default UserCards;
