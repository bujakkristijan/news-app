import { Home } from "../pages/home/Home";
import { NewPost } from "../pages/new-post/NewPost";
import { AllNews } from "../pages/all-news/AllNews";
import { routes } from "./routes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: routes.default,
    element: <Home />,
  },
  {
    path: routes.home,
    element: <Home />,
  },
  {
    path: routes.allNews,
    element: <AllNews />,
  },
  {
    path: routes.newPost,
    element: <NewPost />,
  },
]);
export const RouterComponent = () => {
  return <RouterProvider router={router} />;
};
