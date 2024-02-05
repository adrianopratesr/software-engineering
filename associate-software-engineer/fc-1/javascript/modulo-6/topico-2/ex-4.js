import { httpResponse } from "./utills.https";

const url = "http://localhost:3000/client/9c0118ce-0da6-4c6f-b01f-290a02d2d287";

const deleteClient = async (url) => {
  try {
    const deleteClientResponse = httpResponse(url, "DELETE");
    const response = await deleteClientResponse.text();
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

deleteClient(url);
