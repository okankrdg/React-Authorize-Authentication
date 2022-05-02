import { Outlet } from "react-router-dom";

const Adminlayout = () => {
  return (
    <div>
      <h3>Admin layout</h3>
      <Outlet />
    </div>
  );
};
export default Adminlayout;
