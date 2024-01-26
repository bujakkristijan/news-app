export type NavItemProps = {
    icon: React.ComponentType;
    title: string;
    onClick?: () => void;
    isActive?: boolean;
    value?: string;
    route?: string;
  };
  