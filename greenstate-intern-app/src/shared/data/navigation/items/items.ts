import { HomeIcon } from "../../../../assets/icons/HomeIcon";
import { NewPostIcon } from "../../../../assets/icons/NewPostIcon";
import { AllNewsIcon } from "../../../../assets/icons/AllNewsIcon";
import { NavItemProps } from "../../../../components/nav-item/NavItem";

export const navigationItems:NavItemProps[] = [
    {
      title: "Home",
      icon: HomeIcon,
      value: "HomeNavItem",
      route: "/home",
    },
    {
      title: "New Post",
      icon: NewPostIcon,
      value: "NewPostNavItem",
      route: "/new-post",
    },
    {
      title: "All News",
      icon: AllNewsIcon,
      value: "AllNewsNavItem",
      route: "/all-news",
    },
  ];