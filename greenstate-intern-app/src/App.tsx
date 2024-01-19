import './App.css'
import GlobalStyles from './global-styles/GlobalStyles'
import ThemeProvider from './shared/theme/ThemeProvider';
import { Text } from './components/text/Text';
import { Heading } from './components/heading/Heading';
import { Chip } from './components/chip/Chip';
import { IconWrapper } from './components/icon/icon-wrapper/IconWrapper';
import { HomeIcon } from './assets/icons/HomeIcon';
import { NewPostIcon } from './assets/icons/NewPostIcon';
import { AllNewsIcon } from './assets/icons/AllNewsIcon';
import { NavItem } from './components/nav-item/NavItem';

function App() {

  const handleHomeClick = () => {
    alert("Home NavItem clicked");
  };

  const handleNewPostClick = () => {
    alert("New post NavItem clicked");
  };
  const handleAllNewsClick = () => {
    alert("All news NavItem clicked");
  };

  return (
    <>
    <ThemeProvider>
        <GlobalStyles/>
        <Text fontSize='lg' fontWeight='bold' lineHeight='lg' fontFamily='inter' color="grey">Neki tekst test</Text>
        <Text fontSize='lg' fontWeight='bold' lineHeight='lg' fontFamily='inter'>Neki tekst test</Text>
        <Text>Neki tekst test</Text>
        <Heading headingType='h1' fontWeight='bold' fontFamily='montserrat' color="blue">TEST HEADING1</Heading>
        <Heading headingType='h1' fontWeight='bold' fontFamily='montserrat'>TEST HEADING1</Heading>
        <Heading headingType='h1' fontFamily='montserrat'>TEST HEADING1</Heading>

        <Chip isActive={true}>23/12/2023</Chip>
        <Chip isActive={false}>23/12/2023</Chip>
        <Chip>23/12/2023</Chip>

        <IconWrapper icon={HomeIcon} size ="sm" color="red"></IconWrapper>
        <IconWrapper icon={NewPostIcon} size ="md" color="lightGrey"></IconWrapper>
        <IconWrapper icon={AllNewsIcon} size ="lg" color="blue"></IconWrapper>
        <div style={{width:'250px', height:'250px'}}>
          <IconWrapper icon={AllNewsIcon} size='fill' color="blue"/>
        </div>

        <NavItem icon={HomeIcon} onClickFunc={handleHomeClick}>Home</NavItem>
        <NavItem icon={NewPostIcon} onClickFunc={handleNewPostClick}>New post</NavItem>
        <NavItem icon={AllNewsIcon} onClickFunc={handleAllNewsClick}>All news</NavItem>

    </ThemeProvider>
    </>
  )
}

export default App
