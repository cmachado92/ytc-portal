import { Buffer } from "buffer";

const DATABASE_NAME = "Abax%20Project%20Management";
const USERNAME = "admin";
const PASSWORD = "mamirri123qwe!@#QWE";
const BASIC_AUTH = Buffer.from(USERNAME + ":" + PASSWORD, "utf8").toString(
  "base64"
);
const BASE_URL =
  "https://server.abaxconsultingfm.com/fmi/data/vLatest/databases/";
const url = BASE_URL + DATABASE_NAME + "/sessions";

export const fetchLoginToken = async () => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      ContentType: "application/json",
      Authorization: "Basic " + BASIC_AUTH,
    },
  })
    .then(({ data }) => {
      return response.token;
    })
    .catch((error) => {
      console.log(error);
    });
};
