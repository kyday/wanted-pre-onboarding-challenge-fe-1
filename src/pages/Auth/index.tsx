import Input from "@/components/Input/Input";
import useForm from "@/hooks/useForm";
import styled from "styled-components";

function Auth() {
  const { values, handleChange } = useForm();
  console.log("partent Render");
  return (
    <Section>
      <Form>
        <Title>SignIn</Title>
        <SubTitle>Username</SubTitle>

        <Input
          values={values.email}
          onChange={handleChange}
          placeholder='Email'
          type='email'
          name='email'
        />

        <SubTitle>Password</SubTitle>
        <Input
          values={values.password}
          onChange={handleChange}
          placeholder='password'
          type='password'
          name='password'
        />

        <Button>Sign In</Button>
      </Form>
    </Section>
  );
}

export default Auth;

const Section = styled.section`
  height: 100vh;
  background-color: #000;
`;

const Form = styled.form`
  height: 520px;
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

const Button = styled.button`
  margin-top: 50px;
  width: 100%;
  background-color: #ffffff;
  color: #080710;
  padding: 15px 0;
  font-size: 18px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
`;
