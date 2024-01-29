import { HomeIcon } from "../../../../assets/icons/HomeIcon";
import { NewPostIcon } from "../../../../assets/icons/NewPostIcon";
import { AllNewsIcon } from "../../../../assets/icons/AllNewsIcon";
import { NavItem } from "../../../types/ui-model/navItem";

export const navigationItems:NavItem[] = [
    {
      title: "Home",
      icon: HomeIcon,
      value: "HomeNavItem",
      route: "/",
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