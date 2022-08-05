import { axiosClient } from "../apiClient";

export const getTodos = () => {
  return axiosClient.get("/todos");
};

const getTodoById = () => {
  return axiosClient.get("/todos/${id}");
};

// export default function useTodoApi() {
//   const getTodos = () => {
//     return axiosClient.get("/todos");
//   };

//   const getTodoById = () => {
//     return axiosClient.get("/todos/${id}");
//   };

//   // function createTodo(title: string, content: string, userToken: string) {
//   //   return axios.post(
//   //     "http://localhost:8080/todos",
//   //     {
//   //       title: title,
//   //       content: content,
//   //     },
//   //     {
//   //       headers: {
//   //         Authorization: `Bearer ${userToken}`,
//   //       },
//   //     }
//   //   );
//   // }

//   // function updateTodo(
//   //   newTitle: string,
//   //   newContent: string,
//   //   id: string,
//   //   userToken: string
//   // ) {
//   //   return axios.put(
//   //     `http://localhost:8080/todos/${id}`,
//   //     {
//   //       title: newTitle,
//   //       content: newContent,
//   //     },
//   //     {
//   //       headers: {
//   //         Authorization: `Bearer ${userToken}`,
//   //       },
//   //     }
//   //   );
//   // }

//   // function deleteTodo(id: string, userToken: string) {
//   //   return axios.delete(`http://localhost:8080/todos/${id}`, {
//   //     headers: {
//   //       Authorization: `Bearer ${userToken}`,
//   //     },
//   //   });
//   // }

//   return {
//     getTodos,
//   };
// }
