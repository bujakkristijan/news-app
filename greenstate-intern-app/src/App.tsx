import './App.css'
import HeaderComponent from './components/header/HeaderComponent'
import GlobalStyles from './global-styles/GlobalStyles'
import styled from 'styled-components';
import Theme from './shared/theme/Theme';

const Text = styled.div`
  color: ${(props)=> props.theme.colors.header};
  font-size: ${(props)=> props.theme.fontSizesHeader.large};
`;

function App() {
  

  return (
    <>
    <Theme>
        <GlobalStyles/>
        <HeaderComponent/>
        <Text>Test text</Text>
    </Theme>
    </>
  )
}

export default App
