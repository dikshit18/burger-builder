import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-c781d.firebaseio.com/"
});

export default instance;
