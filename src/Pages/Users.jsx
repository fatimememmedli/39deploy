import React, { useState } from "react";
import style from "../assets/style/Users.module.css";
import UserCards from "./UserCards";
function Users({ users, setUsers }) {
  let loginInfo = JSON.parse(localStorage.getItem("login"));
  const [blocked, setBlocked] = useState([]);
  return (
    <div className={style.container}>
      <h1 className={style.text}>Other Users</h1>
      <div className={style.cardContainer}>
        {loginInfo &&
          users.map((elem, i) => {
            if (
              elem.id != loginInfo.id &&
              !loginInfo.block.find((y) => y.id == elem.id) &&
              !elem.block.find((x) => x.id == loginInfo.id)
            ) {
              return (
                <UserCards
                  setBlocked={setBlocked}
                  blocked={blocked}
                  key={i}
                  user={elem}
                />
              );
            }
          })}
      </div>
    </div>
  );
}

export default Users;
