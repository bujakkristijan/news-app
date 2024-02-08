import GlobalStyles from "./global-styles/GlobalStyles";
import ThemeProvider from "./shared/theme/ThemeProvider";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/Router";
import { useEffect } from "react";
import { initializeNewsData } from "./helper/initialize-news-data/initializeNewsData";

function App() {
  useEffect(() => {
    initializeNewsData();
  }, []);
  return (
    <>
      <ThemeProvider>
        <GlobalStyles />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}
export default App;
