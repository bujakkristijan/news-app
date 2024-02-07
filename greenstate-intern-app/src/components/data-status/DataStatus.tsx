import React from "react";
import { Button as ButtonComponent } from "../button/Button";
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
  const Button = React.memo(ButtonComponent);
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
        <Button fill={true} size="xlg" onClick={onClick}>
          Back to home
        </Button>
      </ButtonWrapper>
    </StyledDataStatusContainer>
  );
};
