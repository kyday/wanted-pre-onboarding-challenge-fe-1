import { StyledButtonProps } from "@/types/styled";
import React from "react";
import styled from "styled-components";

type ButtonType = {
  children: React.ReactNode;
  validation: boolean;
  disabled: boolean;

  onClick?: () => void;
};

const Button = (props: ButtonType) => {
  const { children } = props;
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default React.memo(Button);

const StyledButton = styled.button<StyledButtonProps>`
  cursor: ${(props) => `${props.validation ? "pointer" : "not-allowed"}`};
  margin-top: 50px;
  width: 100%;
  background-color: ${(props) => `${props.validation ? "#0051ff" : "#b8b8b8"}`};
  color: ${(props) => `${props.validation ? "#ffffff" : "#9a9a9a"}`};
  padding: 15px 0;
  font-size: 18px;
  font-weight: 600;
  border-radius: 5px;
`;
