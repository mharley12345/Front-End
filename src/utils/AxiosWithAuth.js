/*dependencies*/
import axios from "axios";
// https://api-receipt-tracker.herokuapp.com/api
export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    baseURL : "https://api-receipt-tracker.herokuapp.com/api",
    headers : {Authorization : token}
  });
};
