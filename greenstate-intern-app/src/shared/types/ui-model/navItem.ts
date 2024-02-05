export type NavItem = {
  icon: React.ComponentType;
  title: string;
  isActive?: boolean;
  value: string;
  route: string;
};
