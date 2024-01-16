import './App.css'
import GlobalStyles from './global-styles/GlobalStyles'
import ThemeProvider from './shared/theme/ThemeProvider';
import { Text } from './components/text/Text';
import { Heading } from './components/heading/Heading';

function App() {

  return (
    <>
    <ThemeProvider>
        <GlobalStyles/>
        <Text fontSize='lg' fontWeight='bold' lineHeight='lg' fontFamily='inter'>Neki tekst test</Text>
        <Heading headingType='h1' fontWeight='bold' fontFamily='montserrat'>TEST HEADING</Heading>
    </ThemeProvider>
    </>
  )
}

export default App
