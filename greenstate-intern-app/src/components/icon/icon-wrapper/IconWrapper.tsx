import React from "react";
import { StyledIcon } from "./StyledIcon";
import { TypographyIconSize } from "../../../shared/theme/theme";
import { Color } from "../../../shared/theme/theme";

type IconWrapperProps = {
  icon: React.ComponentType;
  size: TypographyIconSize | "fill";
  color: Color;
};

export const IconWrapper = ({
  icon: IconComponent,
  size,
  color,
}: IconWrapperProps) => {
  return (
    <StyledIcon size={size} color={color}>
      <IconComponent />
    </StyledIcon>
  );
};

export default IconWrapper;
