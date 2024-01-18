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

  return (
    <>
    <ThemeProvider>
        <GlobalStyles/>
        <Text fontSize='lg' fontWeight='bold' lineHeight='lg' fontFamily='inter' color="grey">Neki tekst test</Text>
        <Heading headingType='h1' fontWeight='bold' fontFamily='montserrat' color="blue">TEST HEADING1</Heading>
        <Chip isActive={true} >
          <Text fontSize="sm" lineHeight = "sm" fontWeight = "semiBold" fontFamily="inter" color='black'>23/12/2023</Text>
        </Chip>
        <Chip isActive={false} >
          <Text fontSize="sm" lineHeight = "sm" fontWeight = "semiBold" fontFamily="inter" color='black'>23/12/2023</Text>
        </Chip>
        <IconWrapper icon={HomeIcon} size ="sm" color="red"></IconWrapper>
        <IconWrapper icon={NewPostIcon} size ="md" color="lightGrey"></IconWrapper>
        <IconWrapper icon={AllNewsIcon} size ="lg" color="blue"></IconWrapper>
        <div style={{width:'250px', height:'250px'}}>
          <IconWrapper icon={AllNewsIcon} size='fill' color="blue"/>
        </div>
        <NavItem icon={AllNewsIcon} size ="lg" color="blue" text={<Text fontSize='lg' fontWeight='bold' lineHeight='lg' fontFamily='inter' color="red">Neki tekst test</Text>} />
        {/* <NavItem>
          <IconWrapper icon={AllNewsIcon} size ="lg" color="blue"></IconWrapper>
          <Text fontSize='lg' fontWeight='bold' lineHeight='lg' fontFamily='inter' color="grey">Neki tekst test</Text>
        </NavItem> */}
    </ThemeProvider>
    </>
  )
}

export default App
