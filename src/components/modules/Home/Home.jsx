import React from "react";

import {
  Widget,
  RequestForApproval,
  LeaveReport,
  Attendance,
  TodaysAttendance,
} from "./subcomponents";

const Home = () => {
  return (
    <>
      <div class="bg-[rgb(242,240,241)] h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-8 py-8">
        <Widget heading="Request for Approval">
          <RequestForApproval />
        </Widget>
        <Widget heading="Leave Report">
          <LeaveReport />
        </Widget>
        <Widget heading="Attendance">
          <Attendance />
        </Widget>
        <Widget heading="Today's Attendance">
          <TodaysAttendance />
        </Widget>
      </div>
    </>
  );
};

export default Home;
