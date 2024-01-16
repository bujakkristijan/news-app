import './App.css'
import HeaderComponent from './components/header/HeaderComponent'
import GlobalStyles from './global-styles/GlobalStyles'
import ThemeProvider from './shared/theme/ThemeProvider';
import { Text } from './components/text/Text';
import { Heading } from './components/heading/Heading';

function App() {
  

  return (
    <>
    <ThemeProvider>
        <GlobalStyles/>
        <HeaderComponent/>
        <Text fontSize='lg' fontWeight='bold' lineHeight='lg' >Neki tekst test</Text>
        <Heading headingType='h2' fontWeight='bold'>TEST HEADING</Heading>
    </ThemeProvider>
    </>
  )
}

export default App
