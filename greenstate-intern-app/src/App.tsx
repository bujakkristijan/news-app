import GlobalStyles from "./global-styles/GlobalStyles";
import ThemeProvider from "./shared/theme/ThemeProvider";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/Router";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        cacheTime: 300000,
      },
    },
  });

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <GlobalStyles />
          <RouterProvider router={router} />
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}
export default App;
