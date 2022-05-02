import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../auth/useAuth";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { isAuthenticated } = useAuth();
  const { onLogin } = useContext(AuthContext);
  const signIn = () => {
    //api return token
    setToken(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik9rYW4gQ2FuIEthcmFkYcSfIiwiaXNBdXRoZW50aWNhdGVkIjp0cnVlLCJyb2xlcyI6WyJtYW5hZ2VyIiwiYWRtaW4iXX0.4HHpwDq3nimnE6FsRGCRxJYbRC30Ew0Eeu8S06XEsPw"
    );
  };
  const setToken = (token: string) => {
    onLogin(token);
  };
  return isAuthenticated ? (
    <Navigate to="/" />
  ) : (
    <div>
      <h1>Login Page</h1>
      <button type="button" onClick={() => signIn()}>
        Sign in
      </button>
    </div>
  );
};
export default Login;
