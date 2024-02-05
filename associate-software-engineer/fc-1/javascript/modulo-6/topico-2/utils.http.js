export const makeHttpRequest = (
  method,
  contentType = "application/json",
  bodyData
) => {
  const httpRequest = {
    method: method,
    headers: {
      "Content-Type": contentType,
    },
  };
  if (bodyData) {
    httpRequest.body = JSON.stringify(data);
  }
  return httpRequest;
};
