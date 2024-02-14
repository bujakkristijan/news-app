import { Card } from "../card/Card";
import { Text } from "../text/Text";
import { StyledBanner, StyledImageBanner } from "./Banner.styles";
import { StyledTextContainer } from "./Banner.styles";

type BannerProps = {
  title: string;
  description: string;
};

export const Banner = ({ title, description }: BannerProps) => {
  return (
    <Card width="100%" padding="0rem">
      <StyledBanner>
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
        {/* <StyledImageBanner src="src/assets/images/news-home-banner.png"></StyledImageBanner> */}
        <StyledImageBanner src="/news-home-banner.png"></StyledImageBanner>
      </StyledBanner>
    </Card>
  );
};
