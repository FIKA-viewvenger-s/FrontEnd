import client from "./client";

export const getAssembles = async () => {
  const { data } = await client.get(
    `/assembles/${"국내"}/${"서울"}/${"서울FC"}/${12123}/${77563}/${"new"}`
  );
  return data.assemblies;
};

export const getMyAssembles = async () => {
  const { data } = await client.get(`/assemblies/reservation`);
  return data.assemblies;
};
