import React from "react";
import style from "../assets/style/Requests.module.css";
import FriendCard from "./FriendCard";
import { useState } from "react";
function Friends({ users }) {
  let loginInfo = JSON.parse(localStorage.getItem("login"));
  const [stateFriend, setStateFriend] = useState([]);
  return (
    <div className={style.container}>
      <h1 className={style.text}>Friends</h1>
      <div className={style.cardContainer}>
        {loginInfo &&
          loginInfo.friends &&
          loginInfo.friends.map((elem, i) => {
            return (
              <FriendCard
                stateFriend={stateFriend}
                setStateFriend={setStateFriend}
                key={i}
                friend={elem}
                users={users}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Friends;
