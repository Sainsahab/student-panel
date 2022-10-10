import axios from "axios";

const Axios = axios.create({
  baseURL: "https://lionfish-app-hbj76.ondigitalocean.app/api",
});

export default Axios;
