import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import useForm from "@/hooks/useForm";
import { StyledFormProps } from "@/types/styled";
import styled from "styled-components";

function Auth() {
  const { values, onChange, onSubmit, isValidation, onIsSignIn, isSignIn } =
    useForm();

  return (
    <Section>
      <Form onSubmit={onSubmit} isSignIn>
        <Title>{isSignIn ? "SignIn" : "SignUp"}</Title>

        {!isSignIn && (
          <>
            <SubTitle>UserName</SubTitle>

            <Input
              values={values.userName}
              onChange={onChange}
              placeholder="UserName"
              type="text"
              name="userName"
            />
          </>
        )}

        <SubTitle>Email</SubTitle>

        <Input
          values={values.email}
          onChange={onChange}
          placeholder="Email"
          type="email"
          name="email"
        />

        <SubTitle>Password</SubTitle>
        <Input
          values={values.password}
          onChange={onChange}
          placeholder="password"
          type="password"
          name="password"
        />

        <Button validation={isValidation} disabled={!isValidation}>
          {isSignIn ? "Sign In" : "Sign Up"}
        </Button>

        <Info onClick={onIsSignIn}>
          {isSignIn
            ? "Don't have an account? Sign Up"
            : "Already have an account? Sign In"}
        </Info>
      </Form>
    </Section>
  );
}

export default Auth;

const Section = styled.section`
  height: 100vh;
  background-color: #000;
`;

const Form = styled.form<StyledFormProps>`
  height: ${(props) => `${props.isSignIn ? 520 : 650}`};
  width: 400px;
  background-color: rgba(255, 255, 255, 0.13);
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgb(8 7 16 / 60%);
  padding: 50px 35px;
  color: #fff;
`;

const Title = styled.h2`
  margin-bottom: 5rem;
  font-size: 32px;
  font-weight: 600;
  line-height: 42px;
  text-align: center;
  color: #fff;
`;

const SubTitle = styled.h3`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const Info = styled.h4`
  margin-top: 1rem;
  text-align: center;
  color: #ffffff;
  font-weight: 400;
  font-size: 15px;
  cursor: pointer;
`;
