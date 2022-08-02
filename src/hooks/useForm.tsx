import { useCallback, useState } from "react";

export default function useForm() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }, []);

  return { values, handleChange };
}
