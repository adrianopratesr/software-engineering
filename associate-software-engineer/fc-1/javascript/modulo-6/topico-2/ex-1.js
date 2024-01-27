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

const createClient = async (url, data) => {
  try {
    const create = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const response = await create.json();
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

createClient(url, data);
