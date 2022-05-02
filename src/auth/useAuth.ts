import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { decodeToken } from "../util/tokenUtil";

interface IAuth {
  isAuthenticated: boolean;
  name: string;
  roles?: string[];
}
interface IAuthProps {
  roles?: string[];
}
const useAuth = (props?: IAuthProps) => {
  var { token } = useContext(AuthContext);
  var auth = decodeToken<IAuth>(token);
  var isAuthenticated = false;
  var isAllow = true;
  if (auth) {
    isAuthenticated = auth.isAuthenticated;
    if (isAuthenticated && props && props.roles) {
      isAllow = props.roles.some((role) => auth?.roles?.includes(role));
    }
  }
  return { isAuthenticated, isAllow };
};
export default useAuth;
