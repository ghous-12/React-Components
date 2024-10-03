import {
  Announcement,
  Attendance,
  LeaveReport,
  RequestForApproval,
  TodaysAttendance,
} from "../components/modules/Home/subcomponents";

export const dashboardWidgets = [
  { id: 1, heading: "Request for Approval", children: <RequestForApproval /> },
  { id: 2, heading: "Leave Report", children: <LeaveReport /> },
  { id: 3, heading: "Attendance", children: <Attendance /> },
  { id: 4, heading: "Today's Attendance", children: <TodaysAttendance /> },
  { id: 5, heading: "Announcement", children: <Announcement /> },
  { id: 6, heading: "", children: "" },
  { id: 7, heading: "", children: "" },
];
