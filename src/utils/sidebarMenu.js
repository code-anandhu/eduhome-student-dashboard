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
    path: "/subjects/:courseId",
    icon: MdLibraryBooks,
  },
  {
    title: "Chapters",
    path: "/chapters/:subjectId",
    icon: MdLibraryBooks,
  },
  {
    title: "Videos",
    path: "/videos/:chapterId",
    icon: MdVideoLibrary,
  },
  {
    title: "Profile",
    path: "/profile",
    icon: MdPerson,
  },
];