import "./App.css";
import GlobalStyles from "./global-styles/GlobalStyles";
import ThemeProvider from "./shared/theme/ThemeProvider";
import { Text } from "./components/text/Text";
import { Heading } from "./components/heading/Heading";
import { Chip } from "./components/chip/Chip";
import { IconWrapper } from "./components/icon/icon-wrapper/IconWrapper";
import { HomeIcon } from "./assets/icons/HomeIcon";
import { NewPostIcon } from "./assets/icons/NewPostIcon";
import { AllNewsIcon } from "./assets/icons/AllNewsIcon";
import { SuccessIcon } from "./assets/icons/SuccessIcon";
import { CircleIcon } from "./components/circle-icon/CircleIcon";
import { Button } from "./components/button/Button";
import { NewsCard } from "./components/card/news-card/NewsCard";
import NewsImage from "./assets/images/news-image.png";
import NewsImage2 from "./assets/images/news-image-2.png";
import { Input } from "./components/input/Input";
import { useState } from "react";
import { Navigation } from "./components/navigation/Navigation";
import { Headline } from "./components/headline/Headline";
import { navigationItems } from "./shared/data/navigation/items/items";
import { NavItem } from "./shared/types/ui-model/navItem";
import { TrustCard } from "./components/card/trust-card/TrustCard";

function App() {
  const [username, setUsername] = useState("Username pera 123");
  const [selectedNavItem, setSelectedNavItem] = useState(
    navigationItems[0].value
  );

  const handleItemClick = (item: NavItem) => {
    console.log("Route: " + item.route);
    setSelectedNavItem(item.value);
  };

  return (
    <>
      <ThemeProvider>
        <GlobalStyles />
        <Text
          fontSize="lg"
          fontWeight="bold"
          lineHeight="lg"
          fontFamily="inter"
          color="grey"
        >
          Neki tekst test
        </Text>
        <Text
          fontSize="lg"
          fontWeight="bold"
          lineHeight="lg"
          fontFamily="inter"
        >
          Neki tekst test
        </Text>
        <Text>Neki tekst test</Text>
        <Heading
          headingType="h1"
          fontWeight="bold"
          fontFamily="montserrat"
          color="blue"
        >
          TEST HEADING1
        </Heading>
        <Heading headingType="h1" fontWeight="bold" fontFamily="montserrat">
          TEST HEADING1
        </Heading>
        <Heading headingType="h1" fontFamily="montserrat">
          TEST HEADING1
        </Heading>
        <Chip isActive={true}>23/12/2023</Chip>
        <Chip isActive={false}>23/12/2023</Chip>
        <Chip>23/12/2023</Chip>
        <IconWrapper icon={HomeIcon} size="sm" color="red"></IconWrapper>
        <IconWrapper
          icon={NewPostIcon}
          size="md"
          color="lightGrey"
        ></IconWrapper>
        <IconWrapper icon={AllNewsIcon} size="lg" color="blue"></IconWrapper>
        <IconWrapper icon={SuccessIcon} size="md" color="blue"></IconWrapper>
        <div style={{ width: "250px", height: "250px" }}>
          <IconWrapper icon={AllNewsIcon} size="fill" color="blue" />
        </div>

        <CircleIcon icon="success"></CircleIcon>
        <CircleIcon icon="warning"></CircleIcon>
        <CircleIcon icon="error"></CircleIcon>
        <IconWrapper icon={HomeIcon} size="sm" color="red"></IconWrapper>
        <Button size="sm" isDisabled={false}>
          Some text
        </Button>
        <Button size="md" isDisabled={false}>
          Some text
        </Button>
        <Button size="lg" isDisabled={true}>
          Some text
        </Button>
        <Button size="xlg" isDisabled={false}>
          Some text
        </Button>
        <Button size="xlg" isDisabled={false}>
          Some text
        </Button>
        <NewsCard
          title="Denmark’s King Frederik X takes throne after Margrethe abdicates asd"
          description="Denmark’s prime minister has proclaimed Frederik X king on the balcony of Christiansborg Palace in Copenhagen, after Queen Margrethe II formally signed her abdication, ending her 52-year reign as the country’s lorem ipsum"
          imageURL={NewsImage}
          isActive={true}
          date="23/12/2023"
        />
        <NewsCard
          title="Denmark’s King Frederik X takes throne after Margrethe abdicates asd"
          description="Denmark’s prime minister has proclaimed Frederik X king on the balcony of Christiansborg Palace in Copenhagen, after Queen Margrethe II formally signed her abdication, ending her 52-year reign as the country’s lorem ipsum"
          imageURL={NewsImage2}
          date="23/12/2023"
        />

        <NewsCard
          title="Denmark’s King Frederik X takes throne after Margrethe abdicates asd"
          description="Denmark’s prime minister has proclaimed Frederik X king on the balcony of Christiansborg Palace in Copenhagen, after Queen Margrethe II formally signed her abdication, ending her 52-year reign as the country’s lorem ipsum"
          imageURL={NewsImage2}
          isActive={false}
          date="23/12/2023"
        />

        <Input
          label="Username"
          type="text"
          disabled={false}
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></Input>
        <Headline title="Latest news" isActive={false} />
        <Headline title="Latest news" isActive={true} />
        <Headline title="Latest news" />

        <Navigation
          items={navigationItems}
          selectedItem={selectedNavItem}
          onItemClick={handleItemClick}
        />

        <TrustCard
          title="News Recognized for Unparalleled Objectivity"
          description="Our News has been acknowledged for its unparalleled commitment to objectivity, standing out in an era where unbiased reporting is increasingly valued"
          circleIcon="success"
        ></TrustCard>

        <TrustCard
          title="News Recognized for Unparalleled Objectivity"
          description="Our News has been acknowledged for its unparalleled commitment to objectivity, standing out in an era where unbiased reporting is increasingly valued"
        ></TrustCard>
      </ThemeProvider>
    </>
  );
}
export default App;
