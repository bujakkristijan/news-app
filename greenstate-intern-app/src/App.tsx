import './App.css'
import GlobalStyles from './global-styles/GlobalStyles'
import ThemeProvider from './shared/theme/ThemeProvider';
import { Text } from './components/text/Text';
import { Heading } from './components/heading/Heading';
import { Chip } from './components/chip/Chip';
import { SuccessIcon } from './components/icon/icons/SuccessIcon';
import { IconWrapper } from './components/icon/icon-wrapper/IconWrapper';
import { ErrorIcon } from './components/icon/icons/ErrorIcon';

function App() {

  return (
    <>
    <ThemeProvider>
        <GlobalStyles/>
        <Text fontSize='lg' fontWeight='bold' lineHeight='lg' fontFamily='inter'>Neki tekst test</Text>
        <Heading headingType='h1' fontWeight='bold' fontFamily='montserrat'>TEST HEADING1</Heading>
        <Chip isActive={true} >23/12/2023</Chip>
        <Chip isActive={false} >23/12/2023</Chip>
        <IconWrapper icon={<SuccessIcon/>} width="100px" color="green" height="100px"></IconWrapper>
        <IconWrapper icon={<ErrorIcon/>} width="150px" color="red" height="150px"></IconWrapper>
    </ThemeProvider>
    </>
  )
}

export default App
