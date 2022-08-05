import React from "react";
import styled from "styled-components";

type InputType = {
  values: string;
  type: string;
  placeholder: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = (props: InputType) => {
  const { values, type, placeholder, name, onChange } = props;

  return (
    <InputStyled
      value={values}
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
    />
  );
};

export default React.memo(Input);

export const InputStyled = styled.input`
  display: block;
  height: 50px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.07);
  border-radius: 3px;
  padding: 0 10px;
  margin-top: 8px;
  font-size: 14px;

  &::placeholder {
    color: #949494;
  }
`;
