import React from "react";
import { TypographyHeadingType, TypographyFontWeight, TypographyFontFamily } from "../../shared/theme/theme";
import { StyledHeading } from "./Heading.styles";

type HeadingProps = {
  headingType: TypographyHeadingType;
  fontWeight: TypographyFontWeight;
  fontFamily: TypographyFontFamily;
  children: string; 
}

export const Heading = ({ headingType, fontWeight, fontFamily, children }: HeadingProps) => {
  return (
    <StyledHeading headingType={headingType} fontWeight={fontWeight} fontFamily={fontFamily}>
      {children}
    </StyledHeading>
  );
};
