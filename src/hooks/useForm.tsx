import useAuthApi from "@/lib/api/user/authApi";
import React, { useCallback, useState } from "react";

export default function useForm() {
  const authServices = useAuthApi();
  const initialState = {
    userName: "",
    email: "",
    password: "",
  };

  //state
  const [values, setValues] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const [isSignIn, setIsSignIn] = useState(true);

  //validation
  const isValidation =
    /\S+@\S+\.\S+/.test(values.email) && values.password.length >= 8;

  //onChange
  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }, []);

  //onSubmit
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSignIn) {
      authServices.requestSignIn(values.email, values.password);
    } else {
      authServices.requestSignUp(values.email, values.password);
    }
  };

  //osIsSignIn
  const onIsSignIn = () => {
    setIsSignIn(!isSignIn);
    setValues(initialState);
  };

  return { values, onChange, onSubmit, isValidation, onIsSignIn, isSignIn };
}
