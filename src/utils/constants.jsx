import {
  Attendance,
  Empty1,
  Empty2,
  LeaveReport,
  RequestForApproval,
  TodaysAttendance,
} from "../components/modules/Home/subcomponents";

export const dashboardWidgets = [
  { id: 1, heading: "Request for Approval", children: <RequestForApproval /> },
  { id: 2, heading: "Leave Report", children: <LeaveReport /> },
  { id: 3, heading: "Attendance", children: <Attendance /> },
  { id: 4, heading: "Today's Attendance", children: <TodaysAttendance /> },
  { id: 5, heading: "", children: <Empty1 /> },
  { id: 6, heading: "", children: <Empty2 /> },
];
