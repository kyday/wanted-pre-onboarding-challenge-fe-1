import styled from "styled-components";

function TodoTitle() {
  return <CardTitle>Todo List</CardTitle>;
}

export default TodoTitle;

export const CardTitle = styled.h1`
  text-align: center;
  margin: 0s;
  padding: 2rem;
  color: #fff;
`;
