/*dependencies*/
import axios from "axios";
// https://api-receipt-tracker.herokuapp.com/api
export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    baseURL: "http://localhost:5000/api",
    headers: {
      Authorization: token
    }
  });
};
