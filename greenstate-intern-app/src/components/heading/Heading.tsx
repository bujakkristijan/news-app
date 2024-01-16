import React from "react";
import { TypographyHeadingType, TypographyFontWeight } from "../../shared/theme/theme";
import { StyledHeading } from "./Heading.styles";

type HeadingProps = {
  headingType: TypographyHeadingType;
  fontWeight: TypographyFontWeight;
  children: React.ReactNode; 
}

export const Heading = ({ headingType, fontWeight, children }: HeadingProps) => {
  return (
    <StyledHeading headingType={headingType} fontWeight={fontWeight}>
      {children}
    </StyledHeading>
  );
};
