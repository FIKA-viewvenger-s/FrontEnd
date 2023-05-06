import axios from "axios";

import config from "../../config";

const client = axios.create({
  baseURL: config.API_URL,
  withCredentials: true,
});

export default client;
