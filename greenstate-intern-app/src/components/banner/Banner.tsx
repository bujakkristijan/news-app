import { Card } from "../card/Card";
import { Text } from "../text/Text";
import { StyledHomeBanner, StyledImageHomeBanner } from "./Banner.styles";
import { StyledTextContainer } from "./Banner.styles";

type HomeBannerProps = {
  title: string;
  description: string;
};

export const HomeBanner = ({ title, description }: HomeBannerProps) => {
  return (
    <Card $width="100%" $padding="0rem">
      <StyledHomeBanner>
        <StyledTextContainer>
          <Text
            fontSize="xLg"
            fontWeight="extraBold"
            lineHeight="lg"
            fontFamily="inter"
            color="white"
          >
            {title}
          </Text>
          <Text
            fontSize="md"
            fontWeight="regular"
            lineHeight="sm"
            fontFamily="inter"
            color="greyHomeBanner"
          >
            {description}
          </Text>
        </StyledTextContainer>
        <StyledImageHomeBanner src="src/assets/images/news-home-banner.png"></StyledImageHomeBanner>
      </StyledHomeBanner>
    </Card>
  );
};
