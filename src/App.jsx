import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import { AttendanceView, HomeView, LeaveView, OthersView } from "./views";
import TimeSheetView from "./views/TimeSheetView";

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/attendance" element={<AttendanceView />} />
          <Route path="/leave" element={<LeaveView />} />
          <Route path="/timesheet" element={<TimeSheetView />} />
          <Route path="/others" element={<OthersView />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
