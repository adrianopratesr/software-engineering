export const httpResponse = async (url, method) => {
  await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const httpResponseJsonData = async (url, method, data) => {
  await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};
