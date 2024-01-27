const url = "http://localhost:3000/client";

const createClient = async (url) => {
  try {
    const create = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await create.json();
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

createClient(url);
