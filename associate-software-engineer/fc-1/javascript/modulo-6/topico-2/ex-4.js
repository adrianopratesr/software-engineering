const url = "http://localhost:3000/client/9c0118ce-0da6-4c6f-b01f-290a02d2d287";

const updateClient = async (url) => {
  try {
    const create = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await create.text();
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

updateClient(url);
