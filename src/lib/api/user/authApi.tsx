import { URL_USER_SIGNIN, URL_USER_SIGNUP } from "@/constants";
import { useNavigate } from "react-router-dom";
import { axiosClient } from "../apiClient";

export type Tlogin = {
  email: string;
  password: string;
};

export default function useAuthApi() {
  let navigate = useNavigate();

  const requestSignIn = async (email: string, password: string) => {
    try {
      const response = await axiosClient.post(URL_USER_SIGNIN, {
        email: email,
        password: password,
      });

      alert(response?.data.message);
      localStorage.setItem("token", response?.data.token);

      await navigate("/");

      return response;
    } catch (e) {
      JSON.stringify(e, function (_, value) {
        if (value.status === 400) {
          alert("로그인에 실패했습니다.");
          return;
        }
        if (value.status === 409) {
          alert("이미 존재하는 유저 입니다.");
          return;
        }
      });
    }
  };

  const requestSignUp = async (email: string, password: string) => {
    try {
      const response = await axiosClient.post(URL_USER_SIGNUP, {
        email: email,
        password: password,
      });

      alert(response?.data.message);

      if (!!response?.data.token) {
        window.location.replace("/auth");
      }

      return response;
    } catch (e) {
      JSON.stringify(e, function (_, value) {
        if (value.status === 400) {
          alert("이메일 형식에 맞게 입력해주세요.");
          return;
        }
        if (value.status === 409) {
          alert("이미 존재하는 유저 입니다.");
          return;
        }
      });
    }
  };

  return {
    requestSignIn,
    requestSignUp,
  };
}
