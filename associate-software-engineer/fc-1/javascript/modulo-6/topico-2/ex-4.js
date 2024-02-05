import { makeHttpRequest } from "./utils.http";
import { httpResponse } from "./utils.https";

const client_id = "9c0118ce-0da6-4c6f-b01f-290a02d2d287";

const CLIENT_URL = `http://localhost:3000/client/${client_id}`;

const deleteClient = async (url) => {
  try {
    const deleteClientResponse = await fetch(url, makeHttpRequest("DELETE"));
    const response = await deleteClientResponse.text();
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

deleteClient(CLIENT_URL);
