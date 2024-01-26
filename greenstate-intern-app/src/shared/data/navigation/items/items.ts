import { HomeIcon } from "../../../../assets/icons/HomeIcon";
import { NewPostIcon } from "../../../../assets/icons/NewPostIcon";
import { AllNewsIcon } from "../../../../assets/icons/AllNewsIcon";
import { NavItem } from "../../../types/ui-model/navItem";

export const navigationItems:NavItem[] = [
    {
      title: "Home sadas das sadasdd",
      icon: HomeIcon,
      value: "HomeNavItem",
      route: "/home",
    },
    {
      title: "New Post sadas sadas asd ads ",
      icon: NewPostIcon,
      value: "NewPostNavItem",
      route: "/new-post",
    },
    {
      title: "All News sdadsa dasadsads ",
      icon: AllNewsIcon,
      value: "AllNewsNavItem",
      route: "/all-news",
    },
  ];