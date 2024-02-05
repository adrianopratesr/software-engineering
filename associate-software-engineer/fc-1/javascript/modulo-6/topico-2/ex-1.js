import { httpResponseJsonData } from "./utills.https";

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

const url = "http://localhost:3000/client";

const newClientResponse = async (url, data) => {
  try {
    const createClientResponse = httpResponseJsonData(url, "POST", data);
    const response = await createClientResponse.json();
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

newClientResponse(url, data);
