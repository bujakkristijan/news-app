import { HomeIcon } from "../../../../assets/icons/HomeIcon";
import { NewPostIcon } from "../../../../assets/icons/NewPostIcon";
import { AllNewsIcon } from "../../../../assets/icons/AllNewsIcon";
import { NavItem } from "../../../types/ui-model/navItem";
import { routes } from "../../../../router/routes";

export const navigationItems:NavItem[] = [
    {
      title: "Home",
      icon: HomeIcon,
      value: "HomeNavItem",
      route: routes.root,
    },
    {
      title: "New Post",
      icon: NewPostIcon,
      value: "NewPostNavItem",
      route: routes.newPost,
    },
    {
      title: "All News",
      icon: AllNewsIcon,
      value: "AllNewsNavItem",
      route: routes.allNews,
    },
  ];