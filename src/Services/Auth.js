import axios from "axios";
import config from "../../config.json";

export function validateToken(token) {
  return axios
    .get(`${config.API_URL}/users?token=${token}`)
    .then((res) => res.data.length > 0)
    .catch((err) => {
      console.error(err);
      return false;
    });
}

export function login(user, password) {
  return axios
    .get(`${config.API_URL}/users?user=${user}&password=${password}`)
    .then((res) => {
      if (res.data.length > 0) {
        return {
          status: true,
          accountInformation: res.data,
        };
      } else {
        return {
          status: false,
          message: "Usuario o contraseña inválidos.",
        };
      }
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
}
