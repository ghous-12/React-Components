import React from "react";
import HomeView from "../views/HomeView";
import SideBar from "../components/shared/SideBar";
import NavBar from "../components/shared/NavBar";
import CallToActionBar from "../components/shared/CallToActionBar";
import { AttendanceProvider } from "../components/controls/AttendanceContext";

const Layout = ({ children }) => {
  return (
    <AttendanceProvider>
      <div className="flex">
        <div className="">
          <SideBar />
        </div>
        <div className="w-full">
          <NavBar />
          <CallToActionBar />
          <HomeView />
        </div>
      </div>
    </AttendanceProvider>
  );
};

export default Layout;
