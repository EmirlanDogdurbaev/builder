import axios from "axios";

const instance = axios.create();
instance.defaults.baseURL = "https://builder-8c2e1-default-rtdb.firebaseio.com";

export default instance;
