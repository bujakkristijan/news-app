import "./App.css";
import GlobalStyles from "./global-styles/GlobalStyles";
import ThemeProvider from "./shared/theme/ThemeProvider";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/Router";

function App() {
  return (
    <>
      <ThemeProvider>
        <GlobalStyles />
        <RouterProvider router={router}></RouterProvider>
      </ThemeProvider>
    </>
  );
}
export default App;
