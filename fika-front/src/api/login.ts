import client from "./client";

export const postLogin = (code: string) => {
  return client
    .get("member/google", {
      params: { code },
      headers: { "Content-Type": "multipart/form-data" },
    })
    .then((res) => res.data);
};
