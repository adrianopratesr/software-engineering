import { makeHttpRequest, makeHttpResponseJsonData } from "./utils.http";

const data = {
  postalCode: "12246021",
  street: "Benedito osvaldo lecques",
  number: 100,
  complement: "apto 24 A",
  city: "São Jóse dos Campos",
  state: "São Paulo",
  name: "Luana Rahal Luz",
  age: 27,
};

const CLIENT_URL = "http://localhost:3000/client";

const newClientResponse = async (url, bodyData) => {
  try {
    const createClientResponse = await fetch(
      url,
      makeHttpRequest("POST", bodyData)
    );
    const response = await createClientResponse.json();
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

newClientResponse(CLIENT_URL, data);
