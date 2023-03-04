import { Buffer } from "buffer";
import React, { useEffect, useState } from "react";
import axios from "axios";

//fm api section
const DATABASE_NAME = "Abax%20Project%20Management";
const USERNAME = "admin";
const PASSWORD = "mamirri123qwe!@#QWE";
const BASIC_AUTH = Buffer.from(USERNAME + ":" + PASSWORD, "utf8").toString(
  "base64"
);
const BASE_URL =
  "https://server.abaxconsultingfm.com/fmi/data/vLatest/databases/";
const url = DATABASE_NAME + "/sessions";

const APIRequest = (props) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url, {
      mode: "cors",
      method: "POST",
      headers: {
        Accept: "application/json",
        ContentType: "application/json",
        Authorization: "Basic " + BASIC_AUTH,
      },
    })
      .then((response) => response.json())
      .then(({ data }) => {
        setData(data.response.token);
        props.onDataReceived(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [url]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return null;
  }

  return <div>{JSON.stringify(data)}</div>;
};

export default APIRequest;
