import { BsHouseFill } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiFileList2Line } from "react-icons/ri";
import { FaRegUser, FaRegBell } from "react-icons/fa";
import SidebarLogo from "./SidebarLogo";
import SidebarItem from "./SidebarItem";
import { BiLogOut } from "react-icons/bi";
import SidebarTweetButton from "./SidebarTweetButton";

const Sidebar = () => {
  const items = [
    {
      label: "Home",
      href: "/",
      icon: BsHouseFill,
    },
    {
      label: "Notifications",
      href: "/notifications",
      icon: FaRegBell,
    },
    {
      label: "Profile",
      href: "/users/123",
      icon: FaRegUser,
    },
    {
      label: "Messages",
      href: "/messages",
      icon: MdOutlineMailOutline,
    },
    {
      label: "Lists",
      href: "/lists",
      icon: RiFileList2Line,
    },
  ];

  return (
    <div className="col-span-1 h-full pr-4 md:pr-6">
      <div className="flex flex-col items-end">
        <div className="space-y-2 lg:w-[230px]">
          <SidebarLogo />
          {items.map((item) => (
            <SidebarItem
              key={`side-bar-item-${item.href}`}
              href={item.href}
              label={item.label}
              icon={item.icon}
            />
          ))}
          <SidebarItem
            onClick={() => {}}
            icon={BiLogOut}
            label="Log Out"
            href="/"
          />
          <SidebarTweetButton />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
