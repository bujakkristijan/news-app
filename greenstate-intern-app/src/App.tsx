import './App.css'
import HeaderComponent from './components/header/HeaderComponent'
import GlobalStyles from './global-styles/GlobalStyles'
import styled from 'styled-components';
import ThemeProvider from './shared/theme/ThemeProvider';

function App() {
  

  return (
    <>
    <ThemeProvider>
        <GlobalStyles/>
        <HeaderComponent/>
    </ThemeProvider>
    </>
  )
}

export default App
