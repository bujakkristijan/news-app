import React from "react";
import { TypographyHeadingType, TypographyFontWeight } from "../../shared/theme/theme";
import { StyledHeading } from "./Heading.styles";

type HeadingProps = {
  headingType: TypographyHeadingType;
  fontWeight: TypographyFontWeight;
}

export const Heading = ({ headingType, fontWeight }: HeadingProps) => {
  return (
    <StyledHeading headingType={headingType} fontWeight={fontWeight}>
      Text
    </StyledHeading>
  );
};
