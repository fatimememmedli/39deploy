import React, { useState } from "react";
import style from "../assets/style/UserCards.module.css";
import { Button } from "@mui/material";
function FriendCard({ users, friend, setStateFriend, stateFriend }) {
  let loginInfo = JSON.parse(localStorage.getItem("login"));
  //   console.log(requests);
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
          <div className={style.text}>{friend.username}</div>
        </div>
        <div className={style.buttons}>
          <Button
            onClick={() => {
              let arr = [];
              arr = loginInfo.friends.filter((elem) => elem.id != friend.id);
              console.log(arr);
              setStateFriend([...arr]);
              loginInfo.friends = arr;
              localStorage.setItem("login", JSON.stringify(loginInfo));

              fetch(`http://localhost:3000/users/${loginInfo.id}`, {
                method: "PATCH",
                body: JSON.stringify({
                  friends: arr,
                }),
                headers: {
                  "Content-type": "application/json; charset=UTF-8",
                },
              });
              let newArr = friend.friends;
              newArr = friend.friends.filter((elem) => elem.id != loginInfo.id);

              console.log(friend.friends);
              fetch(`http://localhost:3000/users/${friend.id}`, {
                method: "PATCH",
                body: JSON.stringify({
                  friends: newArr,
                }),
                headers: {
                  "Content-type": "application/json; charset=UTF-8",
                },
              });
            }}
            color="error"
            variant="contained"
          >
            Unfriend
          </Button>
        </div>
      </div>
    </div>
  );
}

export default FriendCard;
