import React from "react";
import { TypographyHeadingType, TypographyFontWeight, TypographyFontFamily } from "../../shared/theme/theme";
import { StyledHeading } from "./Heading.styles";
import { Color } from "../../shared/theme/theme";

type HeadingProps = {
  headingType: TypographyHeadingType;
  fontWeight: TypographyFontWeight;
  fontFamily: TypographyFontFamily;
  children: string; 
  color?: Color;
}

export const Heading = ({ headingType, fontWeight, fontFamily, children, color }: HeadingProps) => {

  const defaultColor = color || "black";
  
  return (
    <StyledHeading $headingType={headingType} $fontWeight={fontWeight} $fontFamily={fontFamily} $color = {defaultColor}>
      {children}
    </StyledHeading>
  );
};
