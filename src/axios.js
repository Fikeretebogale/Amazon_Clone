import axios from 'axios';
const instance = axios.create({
  baseURL: "https://us-central1-clone-b6447.cloudfunctions.net/api",
});
export default instance;