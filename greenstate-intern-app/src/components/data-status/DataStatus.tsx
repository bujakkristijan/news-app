import { Button } from "../button/Button";
import {
  StyledDataStatusContainer,
  StyledDataMainContainer,
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
  return (
    <StyledDataMainContainer>
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
          <Button size="xlg" onClick={onClick}>
            Back to home
          </Button>
        </ButtonWrapper>
      </StyledDataStatusContainer>
    </StyledDataMainContainer>
  );
};
