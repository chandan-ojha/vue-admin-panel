import axios from "axios";

export default axios.create({
  baseURL: "http://admin-panel-api.test/api/"
});

//axios.defaults.headers.common['Authorization'] = 'Bearer' + localStorage.getItem('token');