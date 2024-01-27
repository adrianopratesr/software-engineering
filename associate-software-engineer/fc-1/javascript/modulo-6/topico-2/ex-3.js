const url = "http://localhost:3000/client/9c0118ce-0da6-4c6f-b01f-290a02d2d287";

const dateUpdate = {
  postalCode: "12246021",
  street: "Benedito osvaldo lecques",
  number: 100,
  complement: "apto 24 A",
  city: "São Jóse dos Campos",
  state: "São Paulo",
  name: "Luana Rahal Luz",
  age: 100
};

const updateClient = async (url, data) => {
  try {
    const create = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const response = await create.text();
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

updateClient(url, dateUpdate);
