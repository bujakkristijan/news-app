import './App.css'
import GlobalStyles from './global-styles/GlobalStyles'
import ThemeProvider from './shared/theme/ThemeProvider';
import { Text } from './components/text/Text';
import { Heading } from './components/heading/Heading';
import { Chip } from './components/chip/Chip';
import { IconWrapper } from './components/icon/icon-wrapper/IconWrapper';
import { HomeIcon } from './components/icon/icons/HomeIcon';
import { NewPostIcon } from './components/icon/icons/NewPostIcon';
import { AllNewsIcon } from './components/icon/icons/AllNewsIcon';

function App() {

  return (
    <>
    <ThemeProvider>
        <GlobalStyles/>
        <Text fontSize='lg' fontWeight='bold' lineHeight='lg' fontFamily='inter'>Neki tekst test</Text>
        <Heading headingType='h1' fontWeight='bold' fontFamily='montserrat'>TEST HEADING1</Heading>
        <Chip isActive={true} >23/12/2023</Chip>
        <Chip isActive={false} >23/12/2023</Chip>
        <IconWrapper icon={HomeIcon} size ="150px" color="red"></IconWrapper>
        <IconWrapper icon={NewPostIcon} size ="80px" color="blue"></IconWrapper>
        <IconWrapper icon={AllNewsIcon} size ="40px" color="green"></IconWrapper>
    </ThemeProvider>
    </>
  )
}

export default App
