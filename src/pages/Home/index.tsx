import { InputStyled } from "@/components/Input/Input";
import { useState } from "react";
import styled from "styled-components";

function Home() {
  const [value, setValue] = useState("");
  return (
    <Layout>
      <CardWrapper>
        <CardTitle>Todo List</CardTitle>

        <StyledExtendedComponent
          value={value}
          type="text"
          placeholder={"새로운 일정을 입력해주세요."}
          name={"add"}
          onChange={(e) => setValue(e.target.value)}
        />
      </CardWrapper>
    </Layout>
  );
}

export default Home;

const Layout = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const CardWrapper = styled.div`
  background-color: #fff;
  overflow: hidden;
  padding: 0 0 32px;
  width: 500px;
  height: 30rem;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
`;

export const CardTitle = styled.h1`
  text-align: center;
`;

const StyledExtendedComponent = styled(InputStyled)`
  margin: 0 auto;
  width: 80%;
  border-bottom: 1px solid #000;
  border-radius: 0;
`;
