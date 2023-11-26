let url = "http://localhost:3000/users";
import axios from "axios";

export async function getAllUsers() {
  let result = [];
  result = await axios(url).then((res) => {
    return res.data;
  });
  return result;
}
export async function postUsers(obj) {
  let result = [];
  result = await axios.post(url, obj).then((res) => {
    return res.data;
  });
  return result;
}
