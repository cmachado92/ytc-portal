import { Buffer } from "buffer";

const DATABASE_NAME = "Abax%20Project%20Management";
const BASE_URL = "/fmi/data/vLatest/databases/";
const url = BASE_URL + DATABASE_NAME + "/sessions";

const APIRequest = async ({ username, password }) => {
  let BASIC_AUTH = "";
  BASIC_AUTH = Buffer.from(username + ":" + password, "utf8").toString(
    "base64"
  );

  try {
    const response = await fetch(url, {
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

export default APIRequest;
