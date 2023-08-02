import { useQuery } from "@tanstack/react-query";
// import { useRouter } from "next/router"
import { loginAPI } from "../api";
import { useRouter } from "next/router";

export const useUserInfo = (code: string) => {
  const { push } = useRouter();
  return useQuery(["fika", "userInfo"], () => loginAPI.postLogin(code), {
    onSuccess: () => push("/hometown-pub"),
    onError: () => console.log("실패"),
    refetchOnWindowFocus: false,
    enabled: !!code,
  });
};
