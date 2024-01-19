import React from "react";
import { TypographyHeadingType, TypographyFontWeight, TypographyFontFamily } from "../../shared/theme/theme";
import { StyledHeading } from "./Heading.styles";
import { Color } from "../../shared/theme/theme";

type HeadingProps = {
  headingType: TypographyHeadingType;
  fontWeight?: TypographyFontWeight;
  fontFamily?: TypographyFontFamily;
  children: string; 
  color?: Color;
}

export const Heading = ({ headingType, fontWeight = "regular", fontFamily="inter", children, color = "black"}: HeadingProps) => {

  return (
    <StyledHeading $headingType={headingType} $fontWeight={fontWeight} $fontFamily={fontFamily} $color={color}>
      {children}
    </StyledHeading>
  );
};
