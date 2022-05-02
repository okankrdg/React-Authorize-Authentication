import jwtDecode from "jwt-decode";

const decodeToken = <T>(token: string) => {
  try {
    return jwtDecode<T>(token);
  } catch (e) {
    return null;
  }
};
const getToken = () => {
  return document.cookie
    .split("; ")
    .find((row) => row.startsWith("token="))
    ?.split("=")[1];
};
const setTokenToCookie = (token: string) => {
  document.cookie = `token=${token}; path=/`;
};
export { decodeToken, getToken, setTokenToCookie };
