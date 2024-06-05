import Link from "next/link";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { usePathname } from "next/navigation";

type IProps = {
  item: any;
};

const SidebarItems = ({ item }: IProps) => {
  const pathname = usePathname();
  const Pathlink = `/dashboard/${item.path}`;

  return (
    <Link href={Pathlink}>
      <ListItem
        disablePadding
        sx={{
          ...(pathname === Pathlink
            ? {
                borderRight: "2px solid #1586FD",
                "& svg": {
                  color: "#1586FD",
                },
              }
            : {}),
          mb: 1,
        }}
      >
        <ListItemButton>
          <ListItemIcon>{item.icon && <item.icon />}</ListItemIcon>
          <ListItemText primary={item.title} />
        </ListItemButton>
      </ListItem>
    </Link>
  );
};

export default SidebarItems;
