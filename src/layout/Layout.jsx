import React from "react";
import { Link, useLocation,Outlet } from "react-router-dom";


const Layout = () => {
  const location = useLocation();
  const urlLocation = location.pathname;
  return (
    <div className="md:flex md:min-h-screen">
    <header className="md:w-1/4 bg-blue-900 px-5 py-10">
      <h1 className="text-4xl font-black text-center text-white ">CRM-Clients</h1>
      <div className="mt-10">
        <Link
          className={`${
            urlLocation === "/clients" && "text-blue-300"} text-2xl block mt-2 hover:text-blue-300`}
          to={"/clients"}
        >
          Clients
        </Link>
        <Link className={`${
            urlLocation === "/clients/new" && "text-blue-300"} text-2xl block mt-2 hover:text-blue-300 `} to={"/clients/new"}>
          New Client
        </Link>
      </div>
    </header>
    <div className="md:w-3/4 p-10 md:h-screen overflow-scroll">
      <Outlet></Outlet>
    </div>
    </div>
    
  );
};

export default Layout;
