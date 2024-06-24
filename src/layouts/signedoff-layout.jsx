import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const SignedOffLayout = () => {
  return (
    <div className="bg-white min-h-svh">
      <Navbar />
      <div className="px-4 py-4 overflow-auto lg:container lg:mx-auto lg:px-12">
        <Outlet />
      </div>
    </div>
  );
};

export default SignedOffLayout;
