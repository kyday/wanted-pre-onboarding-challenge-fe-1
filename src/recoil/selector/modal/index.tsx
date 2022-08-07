import { modalState } from "@/recoil/atom";
import { selector } from "recoil";

export const modalSelector = selector({
  key: "modalSelector",
  get: ({ get }) => {
    const state = get(modalState);

    return !state;
  },
});
