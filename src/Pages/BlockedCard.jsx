import React, { useState } from "react";
import style from "../assets/style/UserCards.module.css";
import { Button } from "@mui/material";
function BlockedCard({ blocked, isBlock, setIsBlock }) {
  let loginInfo = JSON.parse(localStorage.getItem("login"));

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
          <div className={style.text}>{blocked.username}</div>
        </div>
        <div className={style.buttons}>
          <Button
            onClick={() => {
              let arr = loginInfo.block.filter((elem) => elem.id != blocked.id);
              console.log(arr);
              loginInfo.block = arr;
              setIsBlock([...arr]);

              localStorage.setItem("login", JSON.stringify(loginInfo));
              fetch(`http://localhost:3000/users/${loginInfo.id}`, {
                method: "PATCH",
                body: JSON.stringify({
                  block: arr,
                }),
                headers: {
                  "Content-type": "application/json; charset=UTF-8",
                },
              });
            }}
            variant="outlined"
          >
            Unblock
          </Button>
        </div>
      </div>
    </div>
  );
}

export default BlockedCard;
