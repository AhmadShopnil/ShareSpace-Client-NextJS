import DashboardIcon from "@mui/icons-material/Dashboard";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import TryIcon from "@mui/icons-material/Try";
import PersonIcon from "@mui/icons-material/Person";
import KeyIcon from "@mui/icons-material/Key";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import { USER_ROLE } from "@/contants/role";
import { UserRole } from "@/types/common";

export const drawerItems = (role: UserRole): any => {
  const roleMenus: any = [];

  const defaultMenus = [
    {
      title: "My Profile",
      path: `${role}/myProfile`,
      icon: PersonIcon,
    },
    {
      title: "Change Password",
      path: `change-password`,
      icon: KeyIcon,
    },
  ];

  switch (role) {
    case USER_ROLE.ADMIN:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "AllFlats",
          path: `${role}/allFlats`,
          icon: TryIcon,
        },
        {
          title: "AllUsers",
          path: `${role}/allUsers`,
          icon: MedicalInformationIcon,
        }
      );
      break;

    case USER_ROLE.USER:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "My Flat Posts",
          path: `${role}/myflatpost`,
          icon: CalendarMonthIcon,
        },
        {
          title: "Add Flat",
          path: `${role}/addFlat`,
          icon: CalendarMonthIcon,
        },
        {
          title: "Booking Request",
          path: `${role}/myBookingRequest`,
          icon: BookOnlineIcon,
        }
      );
      break;

    default:
      break;
  }

  return [...roleMenus, ...defaultMenus];
};
