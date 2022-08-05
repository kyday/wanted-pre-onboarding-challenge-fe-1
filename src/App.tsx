import { useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { Auth, Home } from "./pages";

function App() {
  const navigate = useNavigate();
  const token: string | null = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  return (
    <Routes>
      <Route
        path="/"
        element={token ? <Home /> : <Navigate replace to="/auth" />}
      />
      <Route path="/auth" element={<Auth />} />
      <Route path="/*" element={<h2>404: not found</h2>} />
    </Routes>
  );
}

export default App;
