import React from "react";
import styled from "styled-components";

function TodoList(props: any) {
  const { item } = props;
  return (
    <StyledLi>
      <ContentTitle>{item.title}</ContentTitle>

      {/* <Remove>
        <RiDeleteBinLine className='icon' width={50} height={50} />
      </Remove> */}

      <p>{item.content}</p>
    </StyledLi>
  );
}

export default React.memo(TodoList);

const ContentTitle = styled.h4`
  font-size: 2rem;
  margin-bottom: 3rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const Remove = styled.div`
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  cursor: pointer;
`;

const StyledLi = styled.li`
  width: 31%;
  text-align: center;
  padding: 1rem;
  color: #fff;
  border: 1px solid #fff;
  height: 200px;
  cursor: pointer;

  &:hover ${Remove} {
    opacity: 1;
    .icon path {
      stroke: #fff; //the color you want.
    }
  }

  p {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;
