import { Star } from "lucide-react";
import { Bookmark } from "lucide-react";

export const employeeRequest = [
  {
    id: 1,
    name: "Mr. Ali",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: <Star size={18} color="#dc060c" fill="#dc060c" />,
  },
  {
    id: 2,
    name: "Mr. Shaheer",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: <Star size={18} />,
  },
  {
    id: 3,
    name: "Ms. Urooj",
    designation: "Quality Assurance",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: <Star size={18} />,
  },
];
export const employeeAttendance = [
  { id: 1, name: "Talha anwar", checkIn: "11:30", checkOut: "6:30" },
  { id: 2, name: "Muhammad ali", checkIn: "01:30", checkOut: "" },
  { id: 3, name: "Shaheer", checkIn: "12:00", checkOut: "8:30" },
];

export const leaveReport = [
  {
    id: 1,
    name: "Absent",
    total: 0,
    used: 0,
  },
  {
    id: 2,
    name: "Sick",
    total: 4,
    used: 0,
  },

  {
    id: 3,
    name: "Casual",
    total: 4,
    used: 2,
  },
  {
    id: 4,
    name: "Annual",
    total: 12,
    used: 5,
  },
];

export const officeAnnouncements = [
  {
    id: 1,
    icon: <Bookmark size={19} />,
    text: "11 Oct: Indoor Cricket match",
  },
  {
    id: 2,
    icon: <Bookmark size={19} />,
    text: "2 Nov: Hassan's Birthday",
  },
  {
    id: 3,
    icon: <Bookmark size={19} />,
    text: "15 Nov: Team Meeting",
  },
];
