import apiUrl from "../apiConfig";
import axios from "axios";

export const index = (borough) => {
  return axios({
    method: "GET",
    url: apiUrl + "/locations/" + borough,
  });
};

export const patchWeight = (location, weight, user) => {
  console.log("in patchwegith", location, user, weight);
  return axios({
    method: "PATCH",
    url: apiUrl + "/locations/" + location._id,
    headers: {
      Authorization: `Token bearer=${user.token}`,
    },
    data: { weight, user },
  });
};
