import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const { onLogin: login } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogin = () => {
    const lastPath = localStorage.getItem("lastPath") || "/";
    login("Mariano Jimenez");
    navigate(lastPath, {
      replace: true,
    });
    console.log("Renderizado");
  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button onClick={onLogin} className="btn btn-primary">
        Login
      </button>
    </div>
  );
};
