import React, { useState } from "react";
import style from "../assets/style/Requests.module.css";
import RequestCard from "./RequestCard";
function Requests({ users, setUsers }) {
  let loginInfo = JSON.parse(localStorage.getItem("login"));
  const [requestState, setRequestState] = useState([]);

  // if (loginInfo.requests) {
  //   setRequestState([...loginInfo.requests]);
  // }
  return (
    <div className={style.container}>
      <h1 className={style.text}>Requests</h1>
      <div className={style.cardContainer}>
        {loginInfo &&
          loginInfo.requests &&
          loginInfo.requests.map((elem, i) => {
            return (
              <RequestCard
                requestState={requestState}
                setRequestState={setRequestState}
                key={i}
                request={elem}
                users={users}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Requests;
