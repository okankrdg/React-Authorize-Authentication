import { Outlet } from "react-router-dom";
import Login from "./Login";

const PublicLayout = () => {
  return (
    <div>
      <h1>Public layout</h1>
      <Login />
      <Outlet />
    </div>
  );
};
export default PublicLayout;
