import apiUrl from "../apiConfig";
import axios from "axios";

export const index = (borough) => {
  return axios({
    method: "GET",
    url: apiUrl + "/locations/" + borough,
  });
};
