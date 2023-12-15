import { Outlet } from "react-router-dom";
import Navbar from "../navbar/navbar";

const Routes = () => {
  return (
    <div>
      <Navbar />
      <Outlet></Outlet>
    </div>
  );
};

export default Routes;
