import { InputStyled } from "@/components/Input/Input";
import { todosSelector } from "@/recoil/selector/todoList";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import TodoTitle from "./components/TodoTitle";

function Home() {
  const [value, setValue] = useState("");

  const todoList = useRecoilValue(todosSelector);

  // // console.log(todoList);

  return (
    <Layout>
      <TodoTitle />

      <StyledExtendedComponent
        value={value}
        type='text'
        placeholder={"새로운 일정을 입력해주세요."}
        name={"add"}
        onChange={(e) => setValue(e.target.value)}
      />
    </Layout>
  );
}

export default Home;

const Layout = styled.section`
  background-color: #000;
  height: 100vh;
`;

export const CardWrapper = styled.div`
  width: 80%;
  height: 100vh;
  margin: 0 auto;
  background-color: #fff;
  overflow: hidden;
  padding: 0 0 32px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
`;

const StyledExtendedComponent = styled(InputStyled)`
  margin: 0 auto;
  width: 80%;
  border-bottom: 1px solid #000;
  border-radius: 0;
  color: #fff;
`;
