import Button from "@/components/Button/Button";
import { InputStyled } from "@/components/Input/Input";
import ModalFrame from "@/components/Modal/Modal";
import useTodos from "@/hooks/useTodos";
import { todosSelector } from "@/recoil/selector/todoList";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import TodoList from "./components/TodoList";
import TodoTitle from "./components/TodoTitle";

function Home() {
  const todoList = useRecoilValue(todosSelector);
  const { values, onChange, onClick, visible, onClickToggleModal } = useTodos();

  return (
    <Layout>
      <TodoTopWapper>
        <TodoTitle />
        <StyledButton onClick={onClickToggleModal} validation={true}>
          등록
        </StyledButton>
      </TodoTopWapper>

      {visible && (
        <ModalFrame
          onClickToggleModal={onClickToggleModal}
          isOpenModal={visible}
        >
          <h1>일정 등록</h1>

          <StyledExtendedComponent
            value={values.title}
            type='text'
            placeholder={"제목을 입력해주세요."}
            name='title'
            onChange={onChange}
          />

          <StyledExtendedComponent
            value={values.content}
            type='text'
            placeholder={"새로운 일정을 입력해주세요."}
            name='content'
            onChange={onChange}
          />

          <StyledButton onClick={onClick} validation={true}>
            추가
          </StyledButton>
        </ModalFrame>
      )}

      <TodoListWrapper>
        <StyledUl>
          {todoList.data?.map((item: any) => {
            return <TodoList key={item.id} item={item} />;
          })}
        </StyledUl>
      </TodoListWrapper>
    </Layout>
  );
}

export default Home;

const Layout = styled.section`
  background-color: #000;
`;

const TodoTopWapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
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

const StyledButton = styled(Button)`
  width: 5rem;
  margin: 0;
`;

const StyledExtendedComponent = styled(InputStyled)`
  margin-bottom: 6rem;
  width: 80%;
  border-bottom: 1px solid #000;
  border-radius: 0;
  color: #000;
`;

const TodoListWrapper = styled.div`
  margin-left: 2rem;
  margin-right: 2rem;
`;

const StyledUl = styled.ul`
  display: flex;
  flex-wrap: wrap;

  gap: 3rem;
`;
