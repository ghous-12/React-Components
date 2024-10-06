import React from "react";
import { HomeView } from "./views";
import { SideBar, NavBar, CallToActionBar } from "./components/shared";

const App = () => {
  return (
    <>
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
    </>
  );
};

export default App;
