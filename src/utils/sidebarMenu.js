import {
  MdDashboard,
  MdMenuBook,
  MdLibraryBooks,
  MdVideoLibrary,
  MdPerson,
} from "react-icons/md";

export const sidebarMenu = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: MdDashboard,
  },
  {
    title: "Courses",
    path: "/courses",
    icon: MdMenuBook,
  },
  {
    title: "Subjects",
    path: "/courses",
    icon: MdLibraryBooks,
  },
  {
    title: "Chapters",
    path: "/courses",
    icon: MdLibraryBooks,
  },
  {
    title: "Videos",
    path: "/courses",
    icon: MdVideoLibrary,
  },
  {
    title: "Profile",
    path: "/profile",
    icon: MdPerson,
  },
];