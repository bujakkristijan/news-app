import { StyledNavItem } from './NavItem.styles'

interface NavItemProps {
    children: React.ReactNode;
  }

export const NavItem = ({children} : NavItemProps) => {
  return (
    <StyledNavItem>
        {children}
    </StyledNavItem>
  )
}
