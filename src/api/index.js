import axios from "axios";
const { REACT_APP_API_URL } = process.env;
const myAxios = axios.create({
  baseURL: REACT_APP_API_URL,
});
export default myAxios;
