import { makeHttpRequest, makeHttpResponse } from "./utils.http";

const CLIENT_URL = "http://localhost:3000/client";

const findClient = async (url) => {
  try {
    const findClientResponse = await fetch(url, makeHttpRequest("GET"));
    const response = await findClientResponse.json();
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

findClient(CLIENT_URL);
