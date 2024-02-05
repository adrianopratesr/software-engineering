import { httpResponse } from "./utills.https";

const url = "http://localhost:3000/client";

const findClient = async (url) => {
  try {
    const findClientResponse = httpResponse(url, "GET");
    const response = await findClientResponse.json();
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

findClient(url);
