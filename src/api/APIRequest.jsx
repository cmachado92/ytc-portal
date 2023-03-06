import React, { useEffect, useState } from "react";
import { Buffer } from "buffer";

//fm api constants
const DATABASE_NAME = "Abax%20Project%20Management";
const USERNAME = "admin";
const PASSWORD = "mamirri123qwe!@#QWE";
const BASE_URL = "/fmi/data/vLatest/databases/";
const BASIC_AUTH = Buffer.from(USERNAME + ":" + PASSWORD, "utf8").toString(
  "base64"
);

const url = BASE_URL + DATABASE_NAME + "/sessions";

const APIRequest = (props) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function postRequest(url) {
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

      setData(token);
      props.onDataReceived(token);
    } catch (error) {
      setError(error);
    }
  }

  useEffect(() => {
    setLoading(true);
    postRequest(url);
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return null;
  }
};
export default APIRequest;
