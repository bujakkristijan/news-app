import React from "react";
import { Button } from "../button/Button";
import {
  StyledDataStatusContainer,
  TextContainer,
  ButtonWrapper,
} from "./DataStatus.styles";
import { Text } from "../text/Text";

type DataStatusProps = {
  icon: React.ComponentType;
  onClick?: () => void;
  title: string;
  description: string;
};

export const DataStatus = ({
  onClick,
  title,
  description,
  icon: IconComponent,
}: DataStatusProps) => {
  const MemoizedButton = React.memo(Button);
  return (
    <StyledDataStatusContainer>
      <IconComponent />
      <TextContainer>
        <Text
          fontSize="xLg"
          fontWeight="extraBold"
          fontFamily="montserrat"
          lineHeight="xLg"
        >
          {title}
        </Text>
        <Text lineHeight="md" color="greyError">
          {description}
        </Text>
      </TextContainer>
      <ButtonWrapper>
        <MemoizedButton fill={true} size="xlg" onClick={onClick}>
          Back to home
        </MemoizedButton>
      </ButtonWrapper>
    </StyledDataStatusContainer>
  );
};
