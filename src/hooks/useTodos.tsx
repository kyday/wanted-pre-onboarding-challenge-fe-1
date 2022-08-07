import { createTodo } from "@/lib/api/todos/todoApi";
import { modalState } from "@/recoil/atom";
import { todosSelector } from "@/recoil/selector/todoList";
import React, { useCallback, useState } from "react";
import { useRecoilRefresher_UNSTABLE, useRecoilState } from "recoil";

export default function useTodos() {
  const refresh = useRecoilRefresher_UNSTABLE(todosSelector);

  const [visible, setVisible] = useRecoilState(modalState);

  //state
  const [values, setValues] = useState({
    title: "",
    content: "",
  });

  const initialState = {
    title: "",
    content: "",
  };

  //onChange
  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }, []);

  //onChange
  const onClick = () => {
    createTodo(values.title, values.content);
    setVisible(false);
    setValues(initialState);
    refresh();
  };

  const onClickToggleModal = useCallback(() => {
    setVisible(!visible);
  }, [visible, setVisible]);

  return { values, onChange, onClick, visible, onClickToggleModal };
}
