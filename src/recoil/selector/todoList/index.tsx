import { getTodos } from "@/lib/api/todos/todoApi";
import { selector } from "recoil";

export const todosSelector = selector({
  key: "todosSelector",
  get: async () => {
    const { data } = await getTodos();
    return data;
  },
});
