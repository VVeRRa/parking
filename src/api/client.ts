import json from "./mocks/parkingLotsMock.json";

// 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZlcmEua2FzcGVyb3ZhQHNlem5hbS5jeiIsImlkIjo0MTgsIm5hbWUiOm51bGwsInN1cm5hbWUiOm51bGwsImlhdCI6MTYwMjM0OTk4MywiZXhwIjoxMTYwMjM0OTk4MywiaXNzIjoiZ29sZW1pbyIsImp0aSI6ImNjYjUzNDY0LTAyYWItNDllNi05ODI1LTVmNGQ2NmI4NTI0NCJ9.rrvyat4WFqQFZN8UroU_0Uss7uzQRjZcOeVDnfKmnIE'
export const parkingLotsFetcher = (apiKey: string) => async () => {
  if (!apiKey) {
    return Promise.resolve(json);
  }
  const response = await fetch("/parkings", {
    headers: {
      "x-access-token": apiKey,
    },
  });
  return response.json();
};

export const parkingLotFetcher = (apiKey: string, id: string) => async () => {
  if (!apiKey) {
    return Promise.resolve(json.features.find(feature => feature.properties.id === +id));
  }
  const response = await fetch(`/parkings/${id}`, {
    headers: {
      "x-access-token": apiKey,
    },
  });
  return response.json();
};
