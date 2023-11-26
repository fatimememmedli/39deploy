import React from "react";
import style from "../assets/style/Users.module.css";
import UserCards from "./UserCards";
import { useState } from "react";
import BlockedCard from "./BlockedCard";
function Blocked({ users }) {
  const [isBlock, setIsBlock] = useState([]);

  let loginInfo = JSON.parse(localStorage.getItem("login"));

  return (
    <div className={style.container}>
      <h1 className={style.text}>Blocked users</h1>
      <div className={style.cardContainer}>
        {loginInfo &&
          loginInfo.block.map((elem, i) => {
            return (
              <BlockedCard
                isBlock={isBlock}
                setIsBlock={setIsBlock}
                key={i}
                blocked={elem}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Blocked;
