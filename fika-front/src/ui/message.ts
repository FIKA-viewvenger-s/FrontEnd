import { Subject } from "rxjs";

export interface Toast {
  message: string;
  type: "success" | "error" | "clear";
}

export const toast$ = new Subject<Toast>();

export default {
  clear: () => {
    toast$.next({ message: "", type: "clear" });
  },
  error: (message: string) => {
    toast$.next({ message, type: "error" });
  },
  success: (message: string) => {
    toast$.next({ message, type: "success" });
  },
};
