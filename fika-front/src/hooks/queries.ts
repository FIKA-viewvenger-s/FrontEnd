import { useQuery } from "@tanstack/react-query";
import { loginAPI } from "../api";
import { useRouter } from "next/router";
import { getAssembles } from "src/api/assemblie";
import { AssemblesType } from "src/types/homeTownPup";

export const useUserInfo = (code: string) => {
  const { push } = useRouter();
  return useQuery(["fika", "userInfo"], () => loginAPI.postLogin(code), {
    onSuccess: () => push("/hometown-pub"),
    onError: () => console.log("실패"),
    refetchOnWindowFocus: false,
    enabled: !!code,
  });
};

export const useGetAssembles = () => {
  const { status, data, error } = useQuery<AssemblesType[]>({
    queryKey: ["assemble", "모임"],
    queryFn: getAssembles,
  });

  return { data, status, error } as {
    data: AssemblesType[];
    status: "idle" | "loading" | "error" | "success";
    error: any;
  };
};

export const useGetMyAssembles = () => {
  const { status, data, error } = useQuery<AssemblesType[]>({
    queryKey: ["assemble", "모임"],
    queryFn: getAssembles,
  });

  return { data, status, error } as {
    data: AssemblesType[];
    status: "idle" | "loading" | "error" | "success";
    error: any;
  };
};
