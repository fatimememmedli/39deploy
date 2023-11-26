import React, { useState } from "react";
import style from "../assets/style/UserCards.module.css";
import { Button } from "@mui/material";
function RequestCard({ request, users, requestState, setRequestState }) {
  let loginInfo = JSON.parse(localStorage.getItem("login"));
  const [friend, setFriend] = useState(false);
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
          <div className={style.text}>{request.username}</div>
        </div>
        <div className={style.buttons}>
          <Button
            onClick={() => {
              console.log(request);
              let localFriends = loginInfo.friends;
              let arr = [];
              console.log(localFriends);
              if (localFriends) {
                arr = localFriends;
              }
              arr = [...localFriends, request];
              console.log(arr);
              setFriend((friend) => !friend);
              //   loginInfo.friends.push(request);
              loginInfo.friends = [...localFriends, request];
              localStorage.setItem("login", JSON.stringify(loginInfo));
              // console.log(loginInfo);
              fetch(`http://localhost:3000/users/${loginInfo.id}`, {
                method: "PATCH",
                body: JSON.stringify({
                  friends: arr,
                }),
                headers: {
                  "Content-type": "application/json; charset=UTF-8",
                },
              });

              let reqArr = loginInfo.requests.filter(
                (elem) => elem.id != request.id
              );
              loginInfo.requests = loginInfo.requests.filter(
                (elem) => elem.id != request.id
              );
              localStorage.setItem("login", JSON.stringify(loginInfo));

              setRequestState([...reqArr]);
              fetch(`http://localhost:3000/users/${loginInfo.id}`, {
                method: "PATCH",
                body: JSON.stringify({
                  requests: reqArr,
                }),
                headers: {
                  "Content-type": "application/json; charset=UTF-8",
                },
              });

              let reqFriend = request.friends;
              let array = [];
              if (reqFriend) {
                array = reqFriend;
              }
              array = [...reqFriend, loginInfo];
              fetch(`http://localhost:3000/users/${request.id}`, {
                method: "PATCH",
                body: JSON.stringify({
                  friends: array,
                }),
                headers: {
                  "Content-type": "application/json; charset=UTF-8",
                },
              });
            }}
            variant="contained"
          >
            Add Friends
          </Button>

          <Button
            onClick={() => {
              let reqArr = loginInfo.requests.filter(
                (elem) => elem.id != request.id
              );
              fetch(`http://localhost:3000/users/${loginInfo.id}`, {
                method: "PATCH",
                body: JSON.stringify({
                  requests: reqArr,
                }),
                headers: {
                  "Content-type": "application/json; charset=UTF-8",
                },
              });
              console.log(reqArr);

              loginInfo.requests = loginInfo.requests.filter(
                (elem) => elem.id != request.id
              );
              localStorage.setItem("login", JSON.stringify(loginInfo));
              setRequestState([...reqArr]);
            }}
            color="error"
            variant="outlined"
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}

export default RequestCard;
