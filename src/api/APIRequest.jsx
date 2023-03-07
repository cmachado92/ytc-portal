import { Buffer } from "buffer";

const DATABASE_NAME = "Abax%20Project%20Management";
const BASE_URL = "/fmi/data/vLatest/databases/";
let url = BASE_URL + DATABASE_NAME;

//login
export const APILogin = async ({ username, password }) => {
  let BASIC_AUTH = "";
  BASIC_AUTH = Buffer.from(username + ":" + password, "utf8").toString(
    "base64"
  );

  try {
    const response = await fetch(url + "/sessions", {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + BASIC_AUTH,
      },
      body: "{}",
    });

    const json = await response.json();
    const token = json.response.token;

    return token;
  } catch (error) {
    throw new Error(error);
  }
};
//requests
export const APIRequest = async ({ path, method, body, token }) => {
  try {
    const response = await fetch(url + path, {
      mode: "cors",
      method: method,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(body),
    });

    const json = await response.json();

    return json;
  } catch (error) {
    throw new Error(error);
  }
};
